import React from "react";
import { DatePicker, Space, TimePicker } from "antd";

const AntDatepicker = () => {
  return (
    <div>
      <DatePicker picker="month" />
      <br />
      <DatePicker picker="date" />
      <br />
      <DatePicker picker="quarter" />
      <br />
      <DatePicker picker="time" />
      <br />
      <DatePicker picker="week" />
      <br />
      <DatePicker picker="year" />
      <br />
      <DatePicker.RangePicker />
      <br />
      <DatePicker.MonthPicker />
      <br />
      <DatePicker.QuarterPicker />
      <br />
      <DatePicker.WeekPicker />
      <br />
      <TimePicker />
    </div>
  );
};

export default AntDatepicker;
