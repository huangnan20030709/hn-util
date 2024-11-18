import './assets/index.css';

import { CheckOutlined, CopyOutlined } from '@ant-design/icons';
import { useClickAway, useDebounceFn } from 'ahooks';
import { message, Popover, Select } from 'antd';
import React, { FC, forwardRef, memo, useEffect, useImperativeHandle, useRef, useState } from 'react';

import useStateRef from '@/hooks/useStateRef';
import { QueryUserInfoLists } from '@/server/aigcAdmin';

import { getIdWithKeyword } from './utils';

// 当作为受控组件时，value是Option[]类型
export type Option = {
  label: string;
  value: {
    isTabSelected: boolean; // 是否被tab选中
    queryText: string; // 查询文本
    sQueryType: string; // 返回的查询类型
    lUid: string; // 返回的用户id
    sUserNick: string; // 返回的用户昵称
    sHuyaId: string; // 返回的虎牙号
    lRoomId: Taf.Long; // 返回的房间号
  };
};

interface IProps {
  ref: React.Ref<IExportAutoComplateSelfProps>; // 通过转发ref获取内部的selectedValue
  value?: Option[];
  onChange?: (value: Option[]) => void;
  mode?: 'single' | 'multiple'; // 默认是多选
}

export interface IExportAutoComplateSelfProps {
  selectedValue: Option[];
}

enum QueryType {
  '名称' = 'sUserNick',
  '虎牙号' = 'sHuyaId',
  '房间号' = 'lRoomId',
  '账号' = 'lUid',
}

const AutoCompleteSelf: FC<IProps> = memo(
  forwardRef<IExportAutoComplateSelfProps, IProps>(
    ({ value: propValue, onChange: propOnChange, mode: propMode = 'multiple' }, ref) => {
      // 下拉框的每一项modal
      const [options, setOptions] = useState<Option[]>([]);

      // 组件内部选中的值
      const [selectedValue, setSelectedValue, selectedValueRef] = useStateRef<Option[]>([]);

      // 下拉框是否展开
      const [open, setOpen] = useState(false);

      // 搜索框的值
      const [searchValue, setSearchValue, searchValueRef] = useStateRef('');

      const dropdownRef = useRef<HTMLDivElement>(null);

      useClickAway(() => {
        setSearchValue('');
        setOpen(false);
      }, dropdownRef);

      useEffect(() => {
        setSelectedValue(propValue || []);
      }, [propValue, setSelectedValue]);

      useImperativeHandle(ref, () => ({
        selectedValue: selectedValueRef.current,
      }));

      //
      const sortOptions = (arr: Option[]): Option[] => {
        const noSelectedArr: Option[] = [];
        const selectedArr: Option[] = [];
        for (const item of arr) {
          if (selectedValueRef.current.find((selectedItem) => selectedItem.value.lUid === item.value.lUid)) {
            selectedArr.push(item);
          } else {
            noSelectedArr.push(item);
          }
        }

        if (noSelectedArr[0] !== undefined) {
          noSelectedArr[0].value.isTabSelected = true;
        }

        return [...noSelectedArr, ...selectedArr];
      };

      // 模糊匹配回调函数
      const { run: QueryKeyword } = useDebounceFn(
        async (keyword: string, curStr: string, preStr: string) => {
          const res = await QueryUserInfoLists(keyword);

          if (res.vInfos.value.length === 0) {
            setOpen(false);
            // 模糊匹配返回空的话，先直接尝试得到idArr
            const result = getIdWithKeyword(keyword);
            console.log(result);

            if (result.isCanAllBeNumbers && result.strArr.length > 0) {
              // 这里需要判断是因为关键词是多个uid导致为0，还是因为关键词导致为0

              if (Math.abs(curStr.length - preStr.length) === 1) {
                // 这里说明是键入数字+-1，不是粘贴的
                if (curStr.endsWith(',') || curStr.endsWith('，')) {
                  // 这里是键入数字且是逗号结尾
                  const [str1, str2] = curStr.split(/,|，/);

                  if (selectedValueRef.current.find((selectedItem) => selectedItem.value.lUid === str1)) {
                    message.warning('已选择过该id');
                  } else {
                    setSelectedValue([
                      ...selectedValue,
                      {
                        label: '账号 : ' + str1,
                        value: {
                          isTabSelected: false,
                          sQueryType: '账号',
                          queryText: str1,
                          lUid: str1,
                          sUserNick: '',
                          sHuyaId: '',
                          lRoomId: 0,
                        },
                      },
                    ]);
                  }

                  setSearchValue(str2);
                } else {
                  // 这里是keyword匹配为0，且键入数字不以逗号结尾
                  setOptions([]);
                }
              } else {
                // 这里是粘贴的字符,且可以全部分隔转换成转换为数字
                setSearchValue('');

                setOptions([]);

                setSelectedValue((prevValue) => {
                  const data = [...prevValue];

                  for (const id of result.strArr) {
                    const findItem = data.find((selectedItem) => selectedItem.value.lUid === id);
                    if (findItem === undefined) {
                      data.push({
                        label: '账号 : ' + id,
                        value: {
                          isTabSelected: false,
                          sQueryType: '账号',
                          queryText: id,
                          lUid: id,
                          // 如果是多个字符串分割来的id，这里就名称，虎牙号和房间号都为空
                          sUserNick: '',
                          sHuyaId: '',
                          lRoomId: 0,
                        },
                      });
                    } else {
                      message.warning('已对重复的id去重');
                    }
                  }
                  return data;
                });
              }
              setTimeout(() => {
                // 理论上ref值是同步更新了，在其他地方也是，这里有问题没有同步更新，给个定时器更新下
                propOnChange && propOnChange(selectedValueRef.current);
              }, 0);
            } else {
              setOptions([]);
            }
          } else {
            setOpen(true);

            setOptions(
              sortOptions(
                res.vInfos.value.map((item) => ({
                  label: item.sQueryType + ' : ' + item[QueryType[item.sQueryType]],
                  value: {
                    isTabSelected: false,
                    sQueryType: item.sQueryType,
                    queryText: item[QueryType[item.sQueryType]],
                    lUid: String(item.lUid),
                    sUserNick: item.sUserNick,
                    sHuyaId: item.sHuyaId,
                    lRoomId: item.lRoomId,
                  },
                })),
              ),
            );
          }
        },
        { wait: 200, leading: true },
      );

      // 键盘事件
      useEffect(() => {
        const handlerKeyboard = (event: KeyboardEvent) => {
          // 已被选中的长度
          const selectOptionsLength = selectedValue.reduce((acc, cur) => {
            for (const option of options) {
              if (option.value.lUid === cur.value.lUid) {
                return acc + 1;
              }
            }
            return acc;
          }, 0);

          if (event.key === 'Tab' || event.key === 'ArrowDown' || event.key === 'ArrowRight') {
            event.preventDefault();
            const findIndex = options.findIndex((item) => item.value.isTabSelected);

            if (findIndex === options.length - 1 - selectOptionsLength) {
              setOptions((options) =>
                options.map((option, index) => ({
                  ...option,
                  value: {
                    ...option.value,
                    isTabSelected: index === 0,
                  },
                })),
              );
            } else {
              setOptions((options) =>
                options.map((option, index) => ({
                  ...option,
                  value: {
                    ...option.value,
                    isTabSelected: index === findIndex + 1,
                  },
                })),
              );
            }
          } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
            event.preventDefault();
            const findIndex = options.findIndex((item) => item.value.isTabSelected);

            if (findIndex === 0) {
              setOptions((options) =>
                options.map((option, index) => ({
                  ...option,
                  value: {
                    ...option.value,
                    isTabSelected: index === options.length - 1 - selectOptionsLength,
                  },
                })),
              );
            } else {
              setOptions((options) =>
                options.map((option, index) => ({
                  ...option,
                  value: {
                    ...option.value,
                    isTabSelected: index === findIndex - 1,
                  },
                })),
              );
            }
          } else if (event.key === 'Enter') {
            const findItem = options.find((item) => item.value.isTabSelected);
            if (findItem && selectedValue.find((selectedItem) => selectedItem.value.lUid === findItem.value.lUid)) {
              message.error('已选择过该用户');
              return;
            }

            findItem && setSelectedValue([...selectedValue, findItem]);
            propOnChange && propOnChange(selectedValueRef.current);
            setOpen(false);
            setSearchValue('');
            setOptions([]);
          }
        };
        document.addEventListener('keydown', handlerKeyboard);

        return () => {
          document.removeEventListener('keydown', handlerKeyboard);
        };
      }, [options, propOnChange, selectedValue, selectedValueRef, setSelectedValue, setSearchValue]);

      return (
        <Select
          mode="tags"
          placeholder={
            propMode === 'multiple'
              ? '昵称，房间号，虎牙号，uid（支持多个，以逗号，空格或换行分隔）'
              : '昵称，房间号，虎牙号，uid'
          }
          optionFilterProp="label"
          open={open}
          value={selectedValue.map((item) => item.label)}
          options={options}
          searchValue={searchValue}
          style={{ margin: '0 10px', width: '100%' }}
          maxCount={propMode === 'multiple' ? 99 : 1}
          onSearch={async (keyword: string) => {
            setSearchValue(keyword);

            QueryKeyword(keyword, searchValueRef.current, searchValue);
          }}
          suffixIcon={
            <Popover content="复制id列表" placement="bottom">
              <CopyOutlined
                onClick={() => {
                  const value = selectedValue.map((item) => item.value.lUid).join(',');

                  if (value === '') {
                    message.error('id列表为空');
                  } else {
                    const el = document.createElement('textarea') as HTMLTextAreaElement;
                    el.value = value;
                    document.body.appendChild(el);
                    el.select();
                    document.execCommand('copy');
                    document.body.removeChild(el);
                    message.success('已复制到剪切板');
                  }
                }}
                style={{ color: 'rgb(22,120,255)', fontSize: '17px' }}
              />
            </Popover>
          }
          dropdownRender={() => (
            <div ref={dropdownRef}>
              {options.map((item, index) => {
                const findItem = selectedValue.find((selectedItem) => selectedItem.value.lUid === item.value.lUid);
                return (
                  <div
                    key={index}
                    className={findItem === undefined ? 'option-item' : 'option-item-selected'}
                    style={{ backgroundColor: item.value.isTabSelected ? 'rgb(230, 244, 255)' : '' }}
                    onClick={() => {
                      if (findItem !== undefined) return;

                      setSelectedValue([...selectedValue, item]);
                      propOnChange && propOnChange(selectedValueRef.current);
                      setOptions([]);
                      setOpen(false);
                      setSearchValue('');
                    }}
                  >
                    <span>{item.label}</span>
                    {findItem && <CheckOutlined style={{ color: 'rgb(82, 196, 26)' }} />}
                  </div>
                );
              })}
            </div>
          )}
          onDeselect={(event: string) => {
            setSelectedValue((selectedValue) =>
              selectedValue.filter(
                (item) => !(event.startsWith(item.value.sQueryType) && event.endsWith(item.value.queryText)),
              ),
            );
            propOnChange && propOnChange(selectedValueRef.current);
          }}
        />
      );
    },
  ),
);

export default AutoCompleteSelf;
