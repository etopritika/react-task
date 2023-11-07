import React from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import Tabs from "../types/tabs";

interface LayoutProps {
  tabs: Tabs[];
}

const Layout: React.FC<LayoutProps> = ({ tabs }) => {
  return (
    <>
      <AppBar tabs={tabs} />
      <main className="container">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
