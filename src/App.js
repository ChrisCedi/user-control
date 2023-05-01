import { useEffect } from "react";
import { Navigation } from "./routes/Navigation";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { getToken } from "./utils/token";
import { setAuth } from "./redux/slices/auth";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "./views/Login/Login";

function App() {
  const { auth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = getToken();

    if (!token) {
      dispatch(setAuth(null));
    } else {
      dispatch(setAuth(token));
    }
  }, [dispatch]);

  if (auth === undefined) return null;

  return (
    <ThemeProvider theme={theme}>
      {!auth ? <Login /> : <Navigation />}
    </ThemeProvider>
  );
}

export default App;
