import React, { useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { ThemeProvider, CssBaseline } from "@material-ui/core/";
import { mainTheme, darkMode } from "../../src/theme";
import ThemeContext from "../../src/context/theme-context";

export default function TopLayout(props) {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkMode : mainTheme;

  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeContext.Provider
        value={{
          isDarkMode: isDarkMode,
          handleTheme: handleTheme,
        }}
      >
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          {props.children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
