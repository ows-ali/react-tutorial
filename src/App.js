import logo from './logo.svg';
import './App.css';
import App2 from './App2';
import CounterInClass from './CounterInClass';
import CounterInFunc from './CounterInFunc';
import RecordClicksArr from './RecordClicksArr';
import Form from './Form';
import ClassCounterOne from './ClassUseEffect';
import FuncUseEffect from  './FuncUseEffect'
import UseEffectDidMount from './UseEffectDidMount';
// import Todo from './components/Todo'
import Todo from './components/Todo'
import TodoFunc from './components/TodoFunc';
function App() {
  return (
    <>
    {/* <div className="App">
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
        <App2 />
      </header>
      
       
       <CounterInClass />
       <CounterInFunc />
       </div>
       <div>
        <h2>Updating state having array/obj-Why we need to use ...rest (it is the right way) and cant use .push (also check &lt;Form&gt; component)</h2>
       <RecordClicksArr />
       <Form/>
       <h2>Use Effect (showing two life cycle behaviors)</h2>
       <ClassCounterOne/>
       <FuncUseEffect/>
       <h2>Understanding dependency array in useEffect</h2>
       <UseEffectDidMount/>

       <h2>Key notes</h2>
       <p>React component will re-render if either state changes or props changes (infact it doesnt care if the updated one is same as before, we can use shouldComponentUpdate to stop this behaviour)</p>
       <p>useState of func and setState of class are both asynchronous, so never use updated state directly after updation</p>
       <p>'this' is used in class comps and not in functional comps</p>
       <p>We always use an initial state either "", 0 or []</p>
       <p>We never modify props directly</p>
       <p>React has unidirectional data flow, we need to use callbacks to update parent from child</p>
       <p>We can pass props from class component to funcctional component and vice versa </p>
       <p>Initially, Container Components were class components and functioal components were presentational components, but now we use functional for both, but we should keep presentational and class components separately to improve reusability</p>

    </div> */}
    
    <p>We are buidling todo app</p>
    
    <Todo />
    <TodoFunc />
    <p>
      We created Todo app using class components
    </p>
    <p>
      We converted into functional component (Notice, we removed this, and function keywords and this.setState() is also replaced)
    </p>
    </>
    
  );
}

export default App;
