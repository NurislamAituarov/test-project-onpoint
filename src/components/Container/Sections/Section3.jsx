import { useState } from 'react';
import './Section3.scss';

import { Button } from '../../Button';
import { PopUp } from '../../PopUp';
import brend from '../../../Assets/images/brend.png';
import left from '../../../Assets/images/left-img.png';
import right from '../../../Assets/images/right-img.png';
import ball1 from '../../../Assets/images/ball1.png';
import ball2 from '../../../Assets/images/ball2.png';
import ball3 from '../../../Assets/images/ball3.png';
import fon from '../../../Assets/images/test_onpoint.jpg';

export function Section3() {
  const [popUp, setPopUp] = useState(false);
  return (
    <section className="container section3">
      <img className="section3__fon" src={fon} alt="" />
      <img className="section3__brend" src={brend} alt="" width={230} />
      <img className="section3__ball1 ball__anim1" src={ball1} alt="" />
      <img className="section3__ball2 ball__anim2" src={ball2} alt="" />
      <img className="section3__ball3 ball__anim3" src={ball3} alt="" />
      <img className="section3__ball4" src={ball3} alt="" />
      <img className="section3__ball5 ball__anim5" src={ball2} alt="" />

      {!popUp && (
        <>
          <Title title="Ключевое сообщения" />
          <div className="section3__block">
            <div className="section3__block_item section3__block_item1">
              <img src={left} alt="" />
              <p>lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit</p>
            </div>
            <div className="section3__block_item section3__block_item2">
              <img src={right} alt="" />
              <p>A arcu cursus vitae</p>
            </div>
            <Button title="Подробнее" click={() => setPopUp(true)} />
          </div>
        </>
      )}
      {popUp && <PopUp setPopUp={setPopUp} />}
    </section>
  );
}

export function Title({ title }) {
  return (
    <div className="section__title">
      <p>{title}</p>
      <h1>
        Brend <strong>xy</strong>
      </h1>
    </div>
  );
}
