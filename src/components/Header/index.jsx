import { useDispatch } from 'react-redux';

import { addCount } from '../../Actions';
import { Logo } from '../../Assets/svg/Logo';
import './header.scss';

export function Header({ onTouch }) {
  const dispatch = useDispatch();

  function onClickHome() {
    dispatch(addCount('home'));
    onTouch('home');
  }

  return (
    <header className="header">
      <Logo click={onClickHome} />
      <hr />
      <h2>PROJECT</h2>
    </header>
  );
}
