import React, { useEffect, useState } from 'react'

export default function UseEffectDidMount() {
    const [num, setnum] = useState(0)
  useEffect(()=>{
    let timeout = setTimeout(()=>{
        setnum(num+5)
    },3000)

    // compwillunmount() equivalent

    return ()=>{
        //remove subscription or timeouts/intervals 
        clearTimeout(timeout)
    }

  }
  ,[] //did mount equivalnt
  )
    return (
        <>
        <div>UseEffectDidMount</div>
        {num}    
        </>
    
  )
}
