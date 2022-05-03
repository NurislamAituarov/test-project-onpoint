import { useEffect, useState } from 'react';
import './main.scss';
import cn from 'classnames';

import { Section1 } from './Sections/Section1';
import { Section2 } from './Sections/Section2';
import { Section3 } from './Sections/Section3';
import img1 from '../../Assets/images/section2-img1.png';
import img2 from '../../Assets/images/section2-img2.png';

export function Main({ onTouch, refWrapper }) {
  const [cordsContainer, setCordsContainer] = useState();
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimation(false);
      setTimeout(() => {
        setAnimation(true);
      }, 5000);
    }, 15000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const block = refWrapper.current;
    block.addEventListener('touchstart', handleTouchStart, false);
    block.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function handleTouchStart(evt) {
      xDown = evt.touches[0].clientX;
      yDown = evt.touches[0].clientY;
    }

    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          /* left swipe */
          onTouch('left', 100);
        } else {
          /* right swipe */
          onTouch('right', -100);
        }
      }
      xDown = null;
      yDown = null;
    }

    return () => {
      block.removeEventListener('touchstart', handleTouchStart, false);
      block.removeEventListener('touchmove', handleTouchMove, false);
    };
  }, []);

  return (
    <div className="wrapper">
      <div ref={refWrapper} className="wrapper__container">
        <div className="wrapper__animImg">
          <img className={cn('section2__img1', { anim1: animation })} src={img1} alt="" />
          <img className={cn('section2__img2', { anim2: animation })} src={img2} alt="" />
          <img className={cn('section2__img3', { anim3: animation })} src={img2} alt="" />
          <img className={cn('section2__img4', { anim4: animation })} src={img2} alt="" />
          <img className={cn('section2__img5', { anim5: animation })} src={img2} alt="" />
        </div>
        <Section1
          cordsContainer={cordsContainer}
          setCordsContainer={setCordsContainer}
          onTouch={onTouch}
        />
        <Section2 />
        <Section3 />
      </div>
    </div>
  );
}
