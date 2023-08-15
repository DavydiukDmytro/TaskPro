import React, { forwardRef, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import icon1 from '../../assets/svg/symbol-defs.svg';
import css from './Calendar.module.css';
import enGB from 'date-fns/locale/en-GB';
import { useFormikContext } from 'formik';
import { format, isToday } from 'date-fns';
registerLocale('enGB', enGB);

export const Calendar = ({ editDate }) => {
  let formattedDate = false;
  if (editDate) {
    const dateComponents = editDate.split('/');

    const day = parseInt(dateComponents[0], 10);
    const month = parseInt(dateComponents[1], 10) - 1;
    const year = parseInt(dateComponents[2], 10);
    formattedDate = new Date(year, month, day);
  }

  const { setFieldValue } = useFormikContext();
  const [startDate, setStartDate] = useState(
    formattedDate ? formattedDate : new Date()
  );
  const [isOpen, setIsOpen] = useState(false);
  const isTodayDate = isToday(startDate);
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      type={'button'}
      className={css.datepicker}
      onClick={onClick}
      ref={ref}
    >
      {isTodayDate ? <span>Today, </span> : null}
      {value}
      {!isOpen ? (
        <svg className={css.svg} width={18} height={18}>
          <use href={icon1 + '#icon-chevron-down'} />
        </svg>
      ) : (
        <svg className={css.svg1} width={18} height={18}>
          <use href={icon1 + '#icon-chevron-up'} />
        </svg>
      )}
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
      onCalendarOpen={() => setIsOpen(true)}
      onCalendarClose={() => setIsOpen(false)}
    />
  );
};
