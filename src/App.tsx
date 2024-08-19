// src/App.tsx

import React, { useState } from 'react';
import useResize from './hooks/useResize';
import useCounter from './hooks/useCounter';

const App: React.FC = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useResize(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>窗口大小</h1>
      <p>宽度: {windowSize.width}px</p>
      <p>高度: {windowSize.height}px</p>

      <h1>计数器</h1>
      <p>当前计数: {count}</p>
      <button onClick={increment}>递增</button>
      <button onClick={decrement}>递减</button>
      <button onClick={reset}>重置</button>
    </div>
  );
};

export default App;