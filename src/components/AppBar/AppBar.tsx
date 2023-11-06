import React from "react";
import { Link } from "react-router-dom";
import Tabs from "../../types/tabs";
import "./AppBar.css";

interface LayoutProps {
  tabs: Tabs[];
}

const AppBar: React.FC<LayoutProps> = ({ tabs }) => {
  const sortedTabs = tabs.sort((a, b) => a.order - b.order);
  return (
    <header className="container">
      <nav>
        <ul className="link-list">
          {sortedTabs.map((tab) => (
            <li className="list-item" key={tab.id}>
              <Link className="list-link" to={`/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
