import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/slices/counter/counterSlice';
import logo from './logo.svg';
import './App.css';

function App() {

  const { counter } = useSelector(state => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            <h1> Count is: {counter}</h1>

          </button>
        </p>

      </header>
    </div>
  );
}

export default App;
