import React from "react";
import { UserContext, ThemeContext } from "./Context";
import { Button } from "antd";
class ContextChild extends React.Component {
  static contextType = UserContext;
  render() {
    return (
      <>
        <p>ContextChild</p>

        <ThemeContext.Consumer>
          {({ theme, changeTheme }) => {
            return (
              <>
                <p>theme: {JSON.stringify(theme)}</p>
                <Button
                  onClick={() => {
                    changeTheme("dark");
                  }}
                >
                  change theme to dark
                </Button>
                <Button
                  onClick={() => {
                    changeTheme("gray");
                  }}
                >
                  change theme to dark
                </Button>
              </>
            );
          }}
        </ThemeContext.Consumer>
      </>
    );
  }
}

export default ContextChild;
