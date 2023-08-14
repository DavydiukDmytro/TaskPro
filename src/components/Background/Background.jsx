import { useMediaQuery } from '@mui/material';
import css from './Background.module.css';
import images from './importImages';

export const Background = ({ img, children }) => {
  const bg = Object.keys(images).filter(item => item.includes(`./${img}-`));
  let bgObject = {};
  const style = {};
  const tab = useMediaQuery('(max-width:768px)');
  const des = useMediaQuery('(max-width:1180px)');
  const ratio = Math.round(window.devicePixelRatio);
  if (ratio === 1) {
    bg.map(item => {
      if (item.includes('des.')) {
        bgObject['des'] = images[item];
      } else if (item.includes('mob.')) {
        bgObject['mob'] = images[item];
      } else if (item.includes('tab.')) {
        bgObject['tab'] = images[item];
      }
      return 1;
    });
  } else {
    bg.map(item => {
      if (item.includes('des@2x.')) {
        bgObject['des'] = images[item];
      } else if (item.includes('mob@2x.')) {
        bgObject['mob'] = images[item];
      } else if (item.includes('tab@2x.')) {
        bgObject['tab'] = images[item];
      }
      return 1;
    });
  }
  if (tab && des) {
    style['backgroundImage'] = `url(${bgObject.mob})`;
  } else if (!tab && des) {
    style['backgroundImage'] = `url(${bgObject.tab})`;
  } else {
    style['backgroundImage'] = `url(${bgObject.des})`;
  }
  return (
    <main style={style} className={css.main}>
      {children}
    </main>
  );
};
