"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { PaletteMode } from "@mui/material";

interface ThemeContextType {
  toggleTheme: () => void;
  mode: PaletteMode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode | null>(null);

  useEffect(() => {
    const storedMode = localStorage.getItem("theme") as PaletteMode | null;
    setMode(storedMode || "light");
  }, []);

  useEffect(() => {
    if (mode) {
      localStorage.setItem("theme", mode);
    }
  }, [mode]);

  // Ensure a default theme to prevent conditional hooks
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode ?? "light", // Default to 'light' before mode is loaded
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // Prevent rendering children until mode is set
  if (mode === null) return <div>Loading...</div>;

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
