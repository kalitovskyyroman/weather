import { ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import BaseLayout from "./pages/BaseLayout";
import getForecast from "./services/forecastService";
import theme from "./theme";

const App = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [result, setResult] = useState();

    useEffect(() => {
        (async () => {
            const resultResp = await getForecast();
            setResult(resultResp);
            console.log(resultResp);
        })();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <BaseLayout />
        </ThemeProvider>
    );
};

export default App;
