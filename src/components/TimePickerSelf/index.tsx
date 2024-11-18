import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import React, { FC, forwardRef, memo, useImperativeHandle, useState } from 'react';

export interface IExportPropsTimePicker {
  selecedBeginTime: number;
  selecedEndTime: number;
}

interface IProps {
  ref: React.Ref<IExportPropsTimePicker>;
  onChange?: (params: [number, number]) => void;
}

const { RangePicker } = DatePicker;

// 获取当天已经过去的毫秒数
const getPastTime = (unix?: number) => {
  let day: Date;
  if (unix !== undefined) {
    day = new Date(unix);
  } else {
    day = new Date();
  }

  const startOfDay = new Date(day.getFullYear(), day.getMonth(), day.getDate());
  const millisecondsPassed = day.getTime() - startOfDay.getTime();

  // 对减去当日时间后小于零点进行处理
  return Math.floor(millisecondsPassed / 1000) * 1000;
};

const rangePresets: any = [
  { label: '最近5分钟', value: [dayjs().add(-5, 'minutes'), dayjs()] },
  { label: '最近30分钟', value: [dayjs().add(-30, 'minutes'), dayjs()] },
  { label: '最近1小时', value: [dayjs().add(-1, 'hours'), dayjs()] },
  { label: '最近3小时', value: [dayjs().add(-3, 'hours'), dayjs()] },
  { label: '最近6小时', value: [dayjs().add(-6, 'hours'), dayjs()] },

  {
    label: '昨天',
    value: [dayjs().add(-1, 'd').add(-getPastTime()), dayjs().add(-getPastTime() - 1000, 'millisecond')],
  },
  {
    label: '近3天（不包含今天）',
    value: [dayjs().add(-3, 'd').add(-getPastTime()), dayjs().add(-getPastTime() - 1000, 'millisecond')],
  },
  {
    label: '近7天（不包含今天）',
    value: [dayjs().add(-7, 'd').add(-getPastTime()), dayjs().add(-getPastTime() - 1000, 'millisecond')],
  },
  {
    label: '近30天（不包含今天）',
    value: [dayjs().add(-30, 'd').add(-getPastTime()), dayjs().add(-getPastTime() - 1000, 'millisecond')],
  },
];

const TimePicker: FC<IProps> = memo(
  forwardRef<IExportPropsTimePicker, IProps>((prop, ref) => {
    const [beginTime, setBeginTime] = useState<number>(rangePresets[5].value[0].valueOf());
    const [endTime, setEndTime] = useState<number>(rangePresets[5].value[1].valueOf());

    useImperativeHandle(ref, () => ({ selecedBeginTime: beginTime, selecedEndTime: endTime }), [beginTime, endTime]);

    const onRangeChange = (dates: null | (Dayjs | null)[]) => {
      if (dates) {
        setBeginTime(dates[0]?.valueOf() || 0);
        setEndTime(dates[1]?.valueOf() || 0);
        prop.onChange && prop.onChange([dates[0]?.valueOf() || 0, dates[1]?.valueOf() || 0]);
      } else {
        setBeginTime(0);
        setEndTime(0);
        prop.onChange && prop.onChange([0, 0]);
      }
    };

    return (
      <RangePicker
        style={{ width: '100%' }}
        defaultValue={rangePresets[5].value}
        presets={rangePresets}
        showTime
        format="YYYY/MM/DD HH:mm:ss"
        onChange={onRangeChange}
      />
    );
  }),
);
export default TimePicker;
