import Img1 from '../../assets/images/backgroundlmg/radiobutton/img1.jpg';
import Img2 from '../../assets/images/backgroundlmg/radiobutton/img2.jpg';
import Img3 from '../../assets/images/backgroundlmg/radiobutton/img3.jpg';
import Img4 from '../../assets/images/backgroundlmg/radiobutton/img4.jpg';
import Img5 from '../../assets/images/backgroundlmg/radiobutton/img5.jpg';
import Img6 from '../../assets/images/backgroundlmg/radiobutton/img6.jpg';
import Img7 from '../../assets/images/backgroundlmg/radiobutton/img7.jpg';
import Img8 from '../../assets/images/backgroundlmg/radiobutton/img8.jpg';
import Img9 from '../../assets/images/backgroundlmg/radiobutton/img9.jpg';
import Img10 from '../../assets/images/backgroundlmg/radiobutton/img10.jpg';
import Img11 from '../../assets/images/backgroundlmg/radiobutton/img11.jpg';
import Img12 from '../../assets/images/backgroundlmg/radiobutton/img12.jpg';
import Img13 from '../../assets/images/backgroundlmg/radiobutton/img13.jpg';
import Img14 from '../../assets/images/backgroundlmg/radiobutton/img14.jpg';
import Img15 from '../../assets/images/backgroundlmg/radiobutton/img15.jpg';
import Img16 from '../../assets/images/backgroundlmg/radiobutton/img16.jpg';

import css from './NewBoard.module.css';
import sprite from '../../assets/svg/symbol-defs.svg';

export const NewBoard = () => {
  return (
    <div className={css.wrapper}>
      <button
        // onClick={() => {
        //   handleClose();
        // }}
        className={css.close}
      >
        <svg width={18} height={18}>
          <use className={css.svg} href={sprite + '#icon-x-close'} />
        </svg>
      </button>

      <h1 className={css.h1}>New board</h1>

      <form className={css.formTitle}>
        <label>
          <input
            className={css.inputTitle}
            type="text"
            name="name"
            placeholder="Title"
            // onChange={this.handleChange}
            // id={this.nameInputId}
            // value={this.state.name}
            required
          />
        </label>

        <h2 className={css.iconsTitle}>Icons</h2>
        <div className={css.radioBlock_1}>
          <input
            className={css.iconsType}
            name="icon"
            type="radio"
            id="project"
            value="Project"
            checked
          />
          <label for="project">
            <svg className={css.svgStyle}>
              <use href={sprite + '#icon-Project'}></use>
            </svg>
          </label>

          <input
            className={css.iconsType}
            name="icon"
            type="radio"
            id="star-04"
            value="Star-04"
          />
          <label for="star-04">
            <svg className={css.svgStyle}>
              <use href={sprite + '#icon-star'}></use>
            </svg>
          </label>

          <input
            className={css.iconsType}
            name="icon"
            type="radio"
            id="loading-03"
            value="Loading-03"
          />
          <label for="loading-03">
            <svg className={css.svgStyle}>
              <use href={sprite + '#icon-loading'}></use>
            </svg>
          </label>

          <input
            className={css.iconsType}
            name="icon"
            type="radio"
            id="puzzle-piece-02"
            value="puzzle-piece-02"
          />
          <label for="puzzle-piece-02">
            <svg className={css.svgStyle}>
              <use href={sprite + '#icon-pazzle'}></use>
            </svg>
          </label>

          <input
            className={css.iconsType}
            name="icon"
            type="radio"
            id="container"
            value="container"
          />
          <label for="container">
            <svg className={css.svgStyle}>
              <use href={sprite + '#icon-container'}></use>
            </svg>
          </label>

          <input
            className={css.iconsType}
            name="icon"
            type="radio"
            id="lightning-02"
            value="lightning-02"
          />
          <label for="lightning-02">
            <svg className={css.svgStyle}>
              <use href={sprite + '#icon-lightning'}></use>
            </svg>
          </label>

          <input
            className={css.iconsType}
            name="icon"
            type="radio"
            id="colors"
            value="colors"
          />
          <label for="colors">
            <svg className={css.svgStyle}>
              <use href={sprite + '#icon-colors'}></use>
            </svg>
          </label>

          <input
            className={css.iconsType}
            name="icon"
            type="radio"
            id="hexagon-01"
            value="hexagon-01"
          />
          <label for="hexagon-01">
            <svg className={css.svgStyle}>
              <use href={sprite + '#icon-hex'}></use>
            </svg>
          </label>
        </div>

        <h2 className={css.iconsTitle}>Background</h2>
        <div className={css.radioBlock_2}>
          <input
            className={css.iconsType}
            name="background"
            type="radio"
            id="img1"
            value="img1"
            checked
          />
          <label for="img1">
            <img className={css.imgStyle} src={Img1} alt="пусто" />
          </label>

          <input
            className={css.iconsType}
            name="background"
            type="radio"
            id="img2"
            value="img2"
          />
          <label for="img2">
            <img className={css.imgStyle} src={Img2} alt="рожеві квіти" />
          </label>

          <input
            className={css.iconsType}
            name="background"
            type="radio"
            id="img3"
            value="img3"
          />
          <label for="img3">
            <img className={css.imgStyle} src={Img3} alt="зоряне небо" />
          </label>

          <input
            className={css.iconsType}
            name="background"
            type="radio"
            id="img4"
            value="img4"
          />
          <label for="img4">
            <img className={css.imgStyle} src={Img4} alt="рожеве дерево" />
          </label>

          <input
            className={css.iconsType}
            name="background"
            type="radio"
            id="img5"
            value="img5"
          />
          <label for="img5">
            <img className={css.imgStyle} src={Img5} alt="місяць у небі" />
          </label>

          <input
            className={css.iconsType}
            name="background"
            type="radio"
            id="img6"
            value="img6"
          />
          <label for="img6">
            <img className={css.imgStyle} src={Img6} alt="зелене листя" />
          </label>

          <input
            className={css.iconsType}
            name="background"
            type="radio"
            id="img7"
            value="img7"
          />
          <label for="img7">
            <img className={css.imgStyle} src={Img7} alt="хмари у небі" />
          </label>

          <input
            className={css.iconsType}
            name="background"
            type="radio"
            id="img8"
            value="img8"
          />
          <label for="img8">
            <img className={css.imgStyle} src={Img8} alt="скелі в морі" />
          </label>
        </div>

        <div className={css.radioBlock_3}>
          <input
            className={css.iconsType}
            name="background"
            type="radio"
            id="img9"
            value="img9"
          />
          <label for="img9">
            <img className={css.imgStyle} src={Img9} alt="білі кулі" />
          </label>

          <input
            className={css.iconsType}
            name="background"
            type="radio"
            id="img10"
            value="img10"
          />
          <label for="img10">
            <img className={css.imgStyle} src={Img10} alt="земля у космосі" />
          </label>

          <input
            className={css.iconsType}
            name="background"
            type="radio"
            id="img11"
            value="img11"
          />
          <label for="img11">
            <img className={css.imgStyle} src={Img11} alt="яхта в морі" />
          </label>

          <input
            className={css.iconsType}
            name="background"
            type="radio"
            id="img12"
            value="img12"
          />
          <label for="img12">
            <img className={css.imgStyle} src={Img12} alt="повітряні кулі" />
          </label>

          <input
            className={css.iconsType}
            name="background"
            type="radio"
            id="img13"
            value="img13"
          />
          <label for="img13">
            <img className={css.imgStyle} src={Img13} alt="червоні піски" />
          </label>

          <input
            className={css.iconsType}
            name="background"
            type="radio"
            id="img14"
            value="img14"
          />
          <label for="img14">
            <img className={css.imgStyle} src={Img14} alt="човен у морі" />
          </label>

          <input
            className={css.iconsType}
            name="background"
            type="radio"
            id="img15"
            value="img15"
          />
          <label for="img15">
            <img
              className={css.imgStyle}
              src={Img15}
              alt="повітряні кулі над скелями"
            />
          </label>

          <input
            className={css.iconsType}
            name="background"
            type="radio"
            id="img16"
            value="img16"
          />
          <label for="img16">
            <img
              className={css.imgStyle}
              src={Img16}
              alt="автобус під зоряним небом"
            />
          </label>
        </div>

        <button className={css.formButton} type="submit">
          <svg width="28px" height="28px" className={css.buttonIcon}>
            <use href={sprite + '#icon-plus'} />
          </svg>
          Create
        </button>
      </form>
    </div>
  );
};
