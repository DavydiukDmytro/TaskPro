import React, { forwardRef, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import icon1 from '../../assets/svg/symbol-defs.svg';
import css from './Calendar.module.css';
import enGB from 'date-fns/locale/en-GB';
import { useFormikContext } from 'formik';
import { format } from 'date-fns';
registerLocale('enGB', enGB);

export const Calendar = () => {
  const { setFieldValue } = useFormikContext();
  const [startDate, setStartDate] = useState(new Date());
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      type={'button'}
      className={css.datepicker}
      onClick={onClick}
      ref={ref}
    >
      {value}
      <svg className={css.svg} width={18} height={18}>
        <use href={icon1 + '#icon-chevron-down'} />
      </svg>
    </button>
  ));

  const handleDateChange = date => {
    setStartDate(date);
    const formattedDate = format(date, 'dd/MM/yyyy');
    setFieldValue('deadline', formattedDate);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleDateChange}
      locale="enGB"
      dateFormat="MMMM d"
      customInput={<CustomInput />}
      calendarClassName={css.dateArea}
      minDate={new Date()}
    />
  );
};
