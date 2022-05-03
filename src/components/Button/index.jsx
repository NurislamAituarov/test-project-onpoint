import { Plus } from '../../Assets/svg/Plus';
import { Right } from '../../Assets/svg/Right-btn';
import './Button.scss';

export function Button({ title, click }) {
  return (
    <div onClick={click} className="wrapper__btn">
      <div>{title !== 'Подробнее' ? <Right /> : <Plus />}</div>
      {title}
    </div>
  );
}
