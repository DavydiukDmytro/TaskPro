import css from './BoardTitle.module.css';
import svgSprite from '../../assets/svg/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { addBoard } from 'store/boards/operationsBoards';

export const BoardTitle = () => {
  const dispatch = useDispatch();
  // const icons = [
  //   project,
  //   star,
  //   loading,
  //   pazzle,
  //   container,
  //   lightning,
  //   colors,
  //   hex,
  // ];
  const handleAddBoard = () => {
    dispatch(addBoard({ title: 'My New Board8', icon: 'lightning' }));
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>My boards</h2>
      <div className={css.container}>
        <p className={css.text}>Create a new board</p>
        <button className={css.button} onClick={() => handleAddBoard()}>
          <svg width={20} height={20} className={css.icon}>
            <use href={svgSprite + '#icon-plus'} />
          </svg>
        </button>
      </div>
    </div>
  );
};
