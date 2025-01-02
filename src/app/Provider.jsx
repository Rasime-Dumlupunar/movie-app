"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

const Provider = ({ children }) => {
  return (
    <ThemeProvider
      scriptProps={{ "data-cfasync": "false" }}
      enableSystem={true}
      attribute="class"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default Provider;
