import React from 'react'
import ReactDom from 'react-dom'

class Portals extends React.Component {
  render() {
    return ReactDom.createPortal(
      <>
        <p>124</p>
      </>,
      document.body
    )
  }
}

export default Portals
