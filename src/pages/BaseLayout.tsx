import Typography from "@mui/material/Typography";

/* eslint-disable arrow-body-style */
const BaseLayout = () => {
    return (
        <div>
            <Typography variant="h1">header 1</Typography>
            <Typography variant="h2">header 1</Typography>
            <Typography variant="body1">body 1</Typography>
            <Typography className="bold" variant="body2">
                body 2
            </Typography>
        </div>
    );
};

export default BaseLayout;
