import React, { useState } from 'react';
 
 
function App() {
  const [click, setClick] = useState([

    {
        id: 0,
        value: Math.random() * 10
      },
      {
          id: 1,
          value: Math.random() * 10
        },

  ]);

  const addNumber = () => {
    setClick([
      ...click,
      {
        id: click.length,
        value: Math.random() * 10
      }
    ]);

    // updating object
    // click = { name: 'old name'}
    // click.name = "new name"
    // setClick(click) //not wrk
    // setClick({...click}) // will work
    // let temp = click
    // temp.push({
    //     id: click.length,
    //     value: Math.random() * 10
    //   })
    //   setClick(temp,()=>{}) // temp is pointing to same array/referecne is same!!

    // this.setState({},()=>{

    // })
    
    //   console.log(click) //kabi 2 elements or kabi 3

  };
   
 
  return (
    <div>
      <ul>
       {click.map(item => (
          <li key={item.id}>{item.value}</li>
       ))}
      </ul>
      <button onClick={addNumber}>
        Click me
      </button>
    </div>
  );
}
 
export default App;