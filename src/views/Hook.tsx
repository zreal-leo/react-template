import React, { useState, useEffect, useCallback, memo } from 'react'
import { Button } from 'antd'

function Counter() {
  const add1 = () => {
    console.log('add1')
    setCount(count + 1)
  }

  const add2 = () => {
    console.log('add2')
  }

  const back = useCallback(() => add2(), [])

  const [count, setCount] = useState(0)
  return (
    <div>
      <div onClick={add1}>add1{count}</div>
      <Son propEvent={back} />
    </div>
  )
}

// function Son(props: { propEvent: () => void }) {
//   useEffect(() => {
//     console.log("son effect");
//   });

//   console.log("son");

//   return <div onClick={props.propEvent}>son</div>;
// }

const Son = memo((props: { propEvent: () => void }) => {
  useEffect(() => {
    console.log('son effect')
  })

  console.log('son')

  return <div onClick={props.propEvent}>son</div>
})

export default Counter
