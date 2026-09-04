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

  const selectedItem = () => {
    return tabsData.find((item) => item.id === selectedItemId);
  };

  return (
    <>
      <div role="tablist">
        {tabsData.map((item) => (
          <button
            role="tab"
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
