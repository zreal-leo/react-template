import React from "react";
import { Button } from "antd";

type Props = {
  readonly name: string;
  show?: boolean;
};

type State = {
  date: Date;
  count: number;
};

class Clock extends React.Component<Props, State> {
  timerId: number | undefined;

  constructor(props: Props) {
    super(props);
    this.state = { date: new Date(), count: 0 };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  add() {
    this.setState((state, props) => {
      return {
        count: state.count + 1,
      };
    });
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2>count: {this.state.count}</h2>
        <h2>name: {this.props.name}</h2>
        {this.props.show && (
          <Button onClick={this.add.bind(this)}>button2</Button>
        )}
      </div>
    );
  }
}

export default Clock;
