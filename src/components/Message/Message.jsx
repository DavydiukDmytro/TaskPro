import css from './Message.module.css';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import { ProgressBar } from 'components/ProgressBar';
import { useEffect, useState } from 'react';

export const Message = ({ success = false, closeMessage, textMessage }) => {
  const [progress, setProgress] = useState(0);

  const icon = success ? '#icon-checkedmark_114531' : '#icon-cancel-close';
  const svgClassName = success ? css.success : css.error;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => prevProgress + 100 / 60);
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setProgress(0);
  }, [textMessage]);

  useEffect(() => {
    if (progress >= 100) {
      closeMessage();
    }
  }, [progress, closeMessage]);

  return (
    <>
      <div className={css.container}>
        <svg width={30} height={30}>
          <use className={svgClassName} href={svgSprite + icon} />
        </svg>
        <p className={css.message}>{textMessage}</p>
        <ProgressBar success={success} progress={progress} />
      </div>
    </>
  );
};
