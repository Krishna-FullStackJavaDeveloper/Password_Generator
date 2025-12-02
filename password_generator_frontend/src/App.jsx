import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import AnimatedBackground from "./components/AnimatedBackground";
import Home from "./pages/Home";

export default function App() {
  const [mode, setMode] = useState(localStorage.getItem("themeMode") || "light");

  const theme = useMemo(() => createTheme({
    palette: { mode },
    components: { MuiButton: { defaultProps: { disableElevation: true } } }
  }), [mode]);

  const toggleMode = () => {
    const next = mode === "light" ? "dark" : "light";
    setMode(next);
    localStorage.setItem("themeMode", next);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatedBackground mode={mode} />
      <Home mode={mode} toggleMode={toggleMode} />
    </ThemeProvider>
  );
}
