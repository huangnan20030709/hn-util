import { Select, Tree, TreeDataNode } from 'antd';
import React, { ReactNode, useMemo, useState } from 'react';

import { getParentKey, mapJSON2Tree, tree2List } from './util';

const defaultExcludedKeys = new Array(99).fill('xxx').map((xxxStr, index) => String(index));

interface IProps {
  jsonStr: string; // JSON格式的字符串
  excludedKeys?: string[]; // 需要排除的字段名，不展示在搜索框中
}

const JSON2Tree: React.FC<IProps> = (prop) => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>(['0']);
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const originDataTree = useMemo(
    () => [mapJSON2Tree('事件详情树形结构数据', JSON.parse(prop.jsonStr))],
    [prop.jsonStr],
  );

  // 用一维数组来存储树形结构
  const originDataList = useMemo<{ key: React.Key; title: string }[]>(
    () => tree2List(originDataTree),
    [originDataTree],
  );

  const onChange = (titleArr: string[]) => {
    //
    const newExpandedKeys: React.Key[] = [];
    for (const title of titleArr) {
      const res = originDataList
        .map((item) => {
          if (item.title.split(': ')[0].toUpperCase() === title.toUpperCase()) {
            return getParentKey(item.key, originDataTree);
          }
          return '';
        })
        .filter((key: React.Key) => key !== '');

      newExpandedKeys.push(...res);
    }
    setExpandedKeys(newExpandedKeys.length === 0 ? ['0'] : newExpandedKeys);
    setSelectedOption(titleArr);
  };

  const treeData = useMemo(() => {
    const loop = (data: TreeDataNode[]): TreeDataNode[] =>
      data.map((item) => {
        const strTitle = item.title as string;

        const findOption = selectedOption.find(
          (option) => strTitle.split(': ')[0].toUpperCase() === option.toUpperCase(),
        );

        let title: ReactNode;
        if (findOption === undefined) {
          title = <span key={item.key}>{strTitle}</span>;
        } else {
          title = (
            <span key={item.key}>
              <span style={{ color: '#f2a' }}>{findOption}</span>
              {strTitle.slice(findOption.length)}
            </span>
          );
        }

        if (item.children) {
          return { title, key: item.key, children: loop(item.children) };
        }

        return {
          title,
          key: item.key,
        };
      });

    return loop(originDataTree);
  }, [originDataTree, selectedOption]);

  const options = useMemo(() => {
    const res: { label: string; value: string; key: React.Key }[] = [];
    const set = new Set();

    for (const item of originDataList) {
      let excludeArr: string[] = [...defaultExcludedKeys];
      if (prop.excludedKeys) {
        excludeArr = [...excludeArr, ...prop.excludedKeys];
      }

      if (!excludeArr.includes(item.title.split(': ')[0]) && !set.has(item.title.split(': ')[0])) {
        res.push({
          label: item.title.split(': ')[0],
          value: item.title.split(': ')[0],
          key: item.key,
        });

        set.add(item.title.split(': ')[0]);
      }
    }

    return res;
  }, [originDataList, prop.excludedKeys]);

  return (
    <div>
      <Select
        mode="multiple"
        showSearch
        style={{
          marginBottom: 20,
          marginTop: 30,
          minWidth: 420,
          minHeight: 38,
          paddingRight: '5px',
        }}
        placeholder="搜索字段名"
        optionFilterProp="label"
        maxCount={5}
        onChange={onChange}
        options={options}
      />

      <Tree
        onExpand={setExpandedKeys}
        expandedKeys={expandedKeys}
        autoExpandParent={true}
        treeData={treeData}
        className="detail-tree"
      />
    </div>
  );
};

export default JSON2Tree;
