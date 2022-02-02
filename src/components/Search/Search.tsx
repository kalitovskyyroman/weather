import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const top100Films = [{ title: "London" }, { title: "Lviv" }];

const Search = () => (
    <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map(option => option.title)}
        renderInput={params => (
            <TextField
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...params}
                label="Enter city"
                InputProps={{
                    ...params.InputProps,
                    type: "search",
                }}
            />
        )}
    />
);

export default Search;
