import React from "react";

class Error extends React.Component<{}, { error: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      error: false,
    };
  }
  render() {
    if (!this.state.error) {
      return this.props.children;
    }
    return <p>出错啦</p>;
  }
}

export default Error;
