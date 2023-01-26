import { ConfigProvider, theme, Button, Card } from "antd";
import { useState } from "react";

import "./App.css";
import CalendarContainer from "./component/calendar/CalendarContainer";

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        <CalendarContainer />
        {/* <SideBarContainer>
          <Card>
            <Button onClick={handleClick}>
              Change Theme to {isDarkMode ? "Light" : "Dark"}
            </Button>
          </Card>
        </SideBarContainer> */}
      </ConfigProvider>
    </>
  );
}

export default App;
