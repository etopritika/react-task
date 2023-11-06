import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import fetchTabs from "../../services/fetchTabs";
import Tabs from "../../types/tabs";
import LazyComponent from "../../helpers/LazyComponent";
import doesComponentExist from "../../helpers/doesComponentExist";
import NotFoundPage from "../NotFoundPage";

function App() {
  const [tabs, setTabs] = useState<Tabs[]>([]);
  useEffect(() => {
    async function loadTabs() {
      const data = await fetchTabs();
      setTabs(data);
    }
    loadTabs();
  }, []);

  const defaultTab = tabs.find((tab) => tab.order === 0);

  return (
    <Routes>
      <Route path="/" element={<Layout tabs={tabs} />}>
        <Route
          path="/"
          element={defaultTab ? LazyComponent(defaultTab.id) : null}
        />
        {tabs.map((tab) => (
          <Route
            key={tab.id}
            path={`/${tab.id}`}
            element={doesComponentExist(tab.id)
              ? LazyComponent(tab.id)
              : <section>Component Not Found</section>}
          />
        ))}
      </Route>
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
