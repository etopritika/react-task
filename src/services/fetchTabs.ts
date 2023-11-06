import Tabs from "../types/tabs";

async function fetchTabs(): Promise<Tabs[]> {
  try {
    const response = await fetch("/data/tabs.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Помилка завантаження JSON: ", error);
    return [];
  }
}

export default fetchTabs;