import React from 'react';
import s from './App.module.css';

function App() {
  return (
    <div className={s.App}>
      <section className={s.toolSection}></section>
      <section className={s.contentContainer}></section>
      <section className={s.toolSection}></section>
    </div>
  );
}

export default App;