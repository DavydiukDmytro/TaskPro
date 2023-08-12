import React, { forwardRef, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './Calendar.module.css';
import enGB from 'date-fns/locale/en-GB';
registerLocale('enGB', enGB);

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
      locale="enGB"
      dateFormat="dd/MM/yyyy"
      customInput={<CustomInput />}
      calendarClassName={css.dateArea}
      minDate={new Date()}
    />
  );
};
