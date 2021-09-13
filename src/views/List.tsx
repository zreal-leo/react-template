import React from 'react'

type propType = {}

type stateType = {
  name: string
  gender: string
  age: number
}

class List extends React.Component<propType, stateType> {
  constructor(props: propType) {
    super(props)
    this.state = { name: '', gender: '', age: 0 }
  }

  onChange = (e: any) => {
    const target = e.target
    const name = target.name
    const value = target.value
    this.setState({
      [name]: value,
    } as stateType)
  }

  render() {
    return (
      <>
        <input className="bg-[#ccc]" type="text" name="name" value={this.state.name} onChange={this.onChange}></input>
        <br />

        <input
          className="bg-[#ccc] m-20px"
          type="text"
          name="gender"
          value={this.state.gender}
          onChange={this.onChange}
        ></input>
        <br />

        <input className="bg-[#ccc]" type="text" name="age" value={this.state.age} onChange={this.onChange}></input>
      </>
    )
  }
}

export default List
