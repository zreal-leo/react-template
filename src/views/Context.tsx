import React from "react";
const Child = React.lazy(() => import("./ContextChild"));
import { Button } from "antd";

export const theme = {
  light: {
    background: "#fff",
  },
  dark: {
    background: "#000",
  },
  gray: {
    background: "#eee",
  },
};

export const UserContext = React.createContext("dc");
UserContext.displayName = "UserContext";
export const ThemeContext = React.createContext({
  theme: theme.light,
  changeTheme: (mode: "light" | "dark" | "gray") => {},
});
ThemeContext.displayName = "ThemeContext";

class Context extends React.Component<
  {},
  { theme: object; mode: "light" | "dark" | "gray" }
> {
  constructor(props: {}) {
    super(props);
    this.state = { theme: theme.light, mode: "light" };
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: theme[this.state.mode],
          changeTheme: (mode: "light" | "dark" | "gray") => {
            this.setState({ theme: theme[mode], mode: mode });
          },
        }}
      >
        <Component />
      </ThemeContext.Provider>
    );
  }
}

function Component() {
  console.log("component");
  return <Child />;
}

export default Context;
