import { Button } from '../../Button';
import './Section1.scss';
import img1 from '../../../Assets/images/img1.png';
import img2 from '../../../Assets/images/img2.png';
import img3 from '../../../Assets/images/img3.png';
import img4 from '../../../Assets/images/img4.png';
import img5 from '../../../Assets/images/img5.png';
import img6 from '../../../Assets/images/img6.png';
import img7 from '../../../Assets/images/img7.png';
import img8 from '../../../Assets/images/img8.png';

export function Section1({ onTouch }) {
  return (
    <section className="container section1">
      <div className="content-item">
        <h2>Привет,</h2>
        <h1>
          это <span>не</span> коммерческое задание
          <Button click={() => onTouch('next', 100)} title="Что дальше?" />
        </h1>
      </div>
      <img className="img img1" src={img1} alt="" />
      <img className="img img2 atom2" src={img2} alt="" />
      <img className="img img3 atom3" src={img3} alt="" />
      <img className="img img4 atom4" src={img4} alt="" />
      <img className="img img5 atom5" src={img5} alt="" />
      <img className="img img6" src={img6} alt="" />
      <img className="img img7" src={img7} alt="" />
      <img className="img img7_" src={img7} alt="" />
      <img className="img img8" src={img8} alt="" />
    </section>
  );
}
