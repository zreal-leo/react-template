import React from 'react'
import { Input, Button } from 'antd'

class Com extends React.Component<{}> {
  textInput: any
  constructor(props: {}) {
    super(props)
    this.textInput = React.createRef()
  }

  focus = () => {
    this.textInput.current.focus()
  }

  render() {
    return (
      <>
        <Input type="text" ref={this.textInput} />
        <Button onClick={this.focus}>focus</Button>
      </>
    )
  }
}

export default Com
