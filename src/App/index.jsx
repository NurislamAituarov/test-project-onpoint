import { useRef } from 'react';

import { Header } from '../components/Header';
import { Main } from '../components/Container';
import './App.css';

let count = 0;

function App() {
  const refWrapper = useRef();
  function onTouch(str, num) {
    count += num;
    if (count < 0 || str === 'home') {
      count = 0;
    }
    if (count === 300) {
      count = 200;
    }
    refWrapper.current.style.left = `-${count}%`;
  }

  return (
    <>
      <Header onTouch={onTouch} />
      <Main refWrapper={refWrapper} onTouch={onTouch} />
    </>
  );
}

export default App;
