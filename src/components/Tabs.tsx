import { useRef } from "react";

interface TabProps {
  tabsData: tabData[];
  selectedItemId: number;
  setSelectedItemId: (id: number) => void;
}

interface tabData {
  title: string;
  id: number;
  body: string;
}

const Tabs = ({ tabsData, selectedItemId, setSelectedItemId }: TabProps) => {
  const getSelectedItemId = (id: number) => {
    setSelectedItemId(id);
  };

  const tabRefs = useRef<HTMLButtonElement[]>([]);

  const selectedItem = () => {
    return tabsData.find((item) => item.id === selectedItemId);
  };

  const moveFocus = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    console.log("Into moving the focus");

    if (event.key === "ArrowRight") {
      let nextIndex = currentIndex + 1;

      if (nextIndex === tabsData.length) {
        nextIndex = 0;
      }
      const nextTab = tabsData[nextIndex];

      tabRefs.current[nextIndex]?.focus();
      setSelectedItemId(nextTab.id);
    }

    if (event.key === "ArrowLeft") {
      console.log("currentIndex::", currentIndex);

      let prevIndex = currentIndex - 1;

      if (prevIndex < 0) {
        prevIndex = tabsData.length - 1;
      }

      const prevTab = tabsData[prevIndex];

      tabRefs.current[prevIndex]?.focus();
      setSelectedItemId(prevTab.id);
    }

    if (event.key === "Home") {
      tabRefs.current[0]?.focus();
      setSelectedItemId(tabsData[0].id);
    }

    if (event.key === "End") {
      const tabsDataLength = tabsData.length - 1;
      tabRefs.current[tabsDataLength]?.focus();
      setSelectedItemId(tabsData[tabsDataLength].id);
    }
  };

  return (
    <>
      <div role="tablist">
        {tabsData.map((item, index) => (
          <button
            role="tab"
            ref={(element) => {
              if (element) tabRefs.current[index] = element;
            }}
            onKeyDown={(event) => moveFocus(event, index)}
            key={item.id}
            tabIndex={item.id === selectedItemId ? 0 : -1}
            aria-selected={item.id === selectedItemId}
            onClick={() => getSelectedItemId(item.id)}
            id={`tab-overview-${item.id}`}
            aria-controls={`panel-overview-${item.id}`}
          >
            {item.title}
          </button>
        ))}
      </div>
      {selectedItem()?.id === selectedItemId && (
        <div
          id={`panel-overview-${selectedItemId}`}
          aria-labelledby={`tab-overview-${selectedItemId}`}
          role="tabpanel"
        >
          {selectedItem()?.body}
        </div>
      )}
    </>
  );
};

export default Tabs;
