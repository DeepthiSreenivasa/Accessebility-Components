import { useState } from "react";
import Tabs from "../components/Tabs";

const TabsDemo = () => {
  const [selectedItemId, setSelectedItemId] = useState(0);

  const tabsData = [
    { title: "Tab 1", id: 1, body: "Details in Tab1" },
    { title: "Tab 2", id: 2, body: "Details in Tab2" },
    { title: "Tab 3", id: 3, body: "Details in Tab3" },
  ];

  return (
    <Tabs
      tabsData={tabsData}
      selectedItemId={selectedItemId}
      setSelectedItemId={setSelectedItemId}
    ></Tabs>
  );
};

export default TabsDemo;
