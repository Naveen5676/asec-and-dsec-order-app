import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [asecbtn, setasecbtn] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setasecbtn((prevvalue)=> !prevvalue);
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  let btntitle = asecbtn ? 'change to Descending order.' : 'Change to Ascending Order';
  return (
    <div className="app">
      <DemoList title='Numbers' items={listItems}  action={asecbtn}/>
      <Button onClick={changeTitleHandler}>{btntitle}</Button>
    </div>
  );
}

export default App;
