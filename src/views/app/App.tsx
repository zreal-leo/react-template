import React, { memo } from 'react'
import { Button } from 'antd'
import './App.less'

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="home">
      <p className="count">{count}</p>
      <Button onClick={() => setCount(count + 1)}>count+1</Button>
    </div>
  )
}

export default memo(App)
