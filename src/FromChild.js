import React from 'react'

export default function FromChild(props) {

  return (
    <>
        <div>FromChild-To demonstrate how to update parent state from child (Function can be passed as props)</div>
        
        <p>Hello {props.parentName} (This line shows how to use "defaultProps")</p>
        <button onClick={()=>props.decCallback(89)}>Decrement (child)</button>
    </>
  )
}
// Passing an array as prop
FromChild.defaultProps = {
    parentName: 'Parent'
}
