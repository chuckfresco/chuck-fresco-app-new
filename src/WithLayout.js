import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import getTheme from 'theme';

import AOS from 'aos';

export const useDarkMode = () => {
  const [themeMode, setTheme] = useState('dark'); // Change 'light' to 'dark' here
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = mode => {
    window.localStorage.setItem('themeMode', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    themeMode === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('themeMode');
    localTheme ? setTheme(localTheme) : setMode('dark'); // Change 'light' to 'dark' here
    setMountedComponent(true);
    AOS.refresh();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [themeMode]);

  return [themeMode, themeToggler, mountedComponent];
};


export default function WithLayout({ component: Component, layout: Layout, ...rest }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.e
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  const [themeMode, themeToggler, mountedComponent] = useDarkMode();
  useEffect(() => {
    AOS.refresh();
  }, [mountedComponent]);

  if (!mountedComponent) return null;

  return (
<ThemeProvider theme={getTheme('dark')}>
  <CssBaseline />
  <Paper elevation={0}>
    <Layout themeMode="dark">
      <Component themeMode="dark" {...rest} />
    </Layout>
  </Paper>
</ThemeProvider>

  );
}