import React from 'react';
import './App.css';

const wishes = [
  { text: 'Travel to the moon', done: false },
  { text: 'Pay the gym', done: true },
  { text: 'Go to the gym', done: false },
];

// eslint-disable-next-line react/function-component-definition
const App = () => (
  <div className="app">
    <h1>Mi lista de deseos</h1>
    <fieldset className="wish-input">
      <legend className="wish-input__label">Nuevo deseo</legend>
      <input className="wish-input__field" placeholder="Introduce tu deseo aquí" />
    </fieldset>
    <ul className="wish-list">
      {wishes.map(({ text, done }, i) => (
        <li key={text} className={`wish-list__item ${done ? 'wish-list__item--done' : ' '}`}>
          <label htmlFor={`wish${i}`}>
            <input id={`wish${i}`} type="checkbox" checked={done} />
            {text}
          </label>
        </li>
      ))}
    </ul>
    <button className="wish-clear" type="button">Archive done</button>
  </div>
);

export default App;
