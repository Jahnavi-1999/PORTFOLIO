// src/components/Layout.tsx
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main> {/* adds space below fixed navbar */}
    </>
  );
};

export default Layout;
