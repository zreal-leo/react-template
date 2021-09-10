import React from "react";

class ListOfWords extends React.PureComponent<{ words: string[] }> {
  render() {
    console.log("124");
    return <div>{this.props.words.join(",")}</div>;
  }
}

class WordAdder extends React.Component<{}, { words: string[] }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      words: ["marklar"],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 这部分代码很糟，而且还有 bug
    // const words = this.state.words;
    // words.push("marklar");
    // this.setState({ words: words });
    this.setState((state) => {
      return {
        words: [...state.words, "marklar"],
      };
    });
  }

  render() {
    return (
      <div>
        <ListOfWords words={this.state.words} />
        <button onClick={this.handleClick}>add</button>
      </div>
    );
  }
}

export default WordAdder;
