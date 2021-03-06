import { ThemeProvider } from "@mui/material";
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from "react-hot-loader/root";
import BaseLayout from "./pages/BaseLayout";
import theme from "./theme";

const App = () => {
    if (!localStorage.getItem("lastLocation")) {
        localStorage.setItem("lastLocation", "London");
    }

    return (
        <ThemeProvider theme={theme}>
            <BaseLayout />
        </ThemeProvider>
    );
};

export default hot(App);
