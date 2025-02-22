"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export function ThemeProvider({ children,...props }) { 
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}