import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import './PopUp.scss';

import { Title } from '../Container/Sections/Section3';
import nav_btn from '../../Assets/svg/nav-btn.svg';

const arrList = [
  {
    num: '01',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    num: '02',
    title: 'Lorem ipsum dolor sit amet consectetur .',
  },
  {
    num: '03',
    title: 'Lorem ipsum dolor sit amet .',
  },
  {
    num: '04',
    title: 'Lorem ipsum dolor sit amet .',
  },
  {
    num: '05',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    num: '06',
    title: 'Lorem ipsum dolor sit amet .',
  },
  {
    num: '01',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

export function PopUp({ setPopUp }) {
  const [arr, setArr] = useState([]);
  const [trigger, setTrigger] = useState('prev');
  const refPopUp = useRef();

  const handleClickOutside = (event) => {
    if (refPopUp.current === event.target) {
      setPopUp(false);
    }
  };

  useEffect(() => {
    setArr(arrList.slice(0, 3));
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  function next() {
    setArr(arrList.slice(3, 6));
    setTrigger('next');
  }
  function prev() {
    setArr(arrList.slice(0, 3));
    setTrigger('prev');
  }

  return (
    <div ref={refPopUp} className="section__popUp">
      <div className="container__popUp">
        <Title title="Преимущества" />

        <div className="wrapper__list">
          {arr.map((el, i) => {
            return (
              <div className="wrapper__list__item" key={i}>
                <strong className="fade">{el.num}</strong>
                <p>{el.title}</p>
              </div>
            );
          })}
        </div>

        <div className="nav__btns">
          <img onClick={prev} src={nav_btn} alt="" height="30" width="30" />
          <div className={cn('nav__circle', { 'active-btn': trigger === 'prev' })}></div>
          <div className={cn('nav__circle', { 'active-btn': trigger === 'next' })}></div>
          <img onClick={next} src={nav_btn} alt="" height="30" width="30" />
        </div>

        <div
          onClick={() => {
            setPopUp(false);
          }}
          className="popUp__close">
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
