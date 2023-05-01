import { Navigation } from "./routes/Navigation";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
