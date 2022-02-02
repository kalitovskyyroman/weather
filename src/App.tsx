import { ThemeProvider } from "@mui/material";
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from "react-hot-loader/root";
import BaseLayout from "./pages/BaseLayout";
import theme from "./theme";

const App = () => (
    <ThemeProvider theme={theme}>
        <BaseLayout />
    </ThemeProvider>
);

export default hot(App);
