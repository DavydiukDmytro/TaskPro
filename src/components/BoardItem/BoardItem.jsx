import { NavLink } from 'react-router-dom';
import sprite from '../../assets/svg/symbol-defs.svg';

export const BoardItem = ({ icon, title }) => {
  return (
    <li>
      <NavLink>
        <svg>
          <use href={sprite + icon} />
        </svg>
        <p>{title}</p>
        <button>
          <svg>
            <use href={sprite + `#icon-pencil'`} />
          </svg>
        </button>
        <button>
          <svg>
            <use href={sprite + '#icon-trash-04'} />
          </svg>
        </button>
      </NavLink>
    </li>
  );
};
