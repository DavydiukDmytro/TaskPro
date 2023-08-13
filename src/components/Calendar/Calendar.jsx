import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './Calendar.module.css';

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={css.datepicker} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const handleDateChange = date => {
    setStartDate(date);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleDateChange}
      // locale="en-GB"
      dateFormat="dd/MM/yyyy"
      customInput={<CustomInput />}
      calendarClassName={css.dateArea}
      minDate={new Date()}
    />
  );
};
