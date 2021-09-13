import React, { memo, useCallback, useMemo, useState } from 'react'

const TodoList = () => {
  const [list, setList] = useState([1, 2, 3, 4, 5])
  const [num, setNum] = useState(0)

  const add = useCallback(() => {
    setList(list => [...list, list[list.length - 1] + 1])
  }, [])

  function getLength() {
    console.log('length')
    return list.length
  }

  // let length = useMemo(() => getLength(), [list]);

  let length = getLength()

  return (
    <div>
      <button onClick={() => setNum(num => num + 1)}> changeNum</button>
      <button onClick={add}>add task</button>
      <p>{length}</p>
    </div>
  )
}

export default TodoList
