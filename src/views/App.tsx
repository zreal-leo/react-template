import React, { useState, lazy, Suspense } from 'react'
import './App.less'
import Clock from './Clock'
// import Input from "./List";
const Input = lazy(() => import('./List'))

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {/* <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button> */}
        </p>
      </header>
      {/* <Clock name="lo" show={true}></Clock> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Input></Input>
      </Suspense>
    </div>
  )
}

export default App
