/* eslint-disable @typescript-eslint/no-unused-vars */
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { debounce } from "lodash";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import ISearchLocation from "../../../interfaces/ISearchLocation";
import getSearchLocation from "../../../services/searchService";

interface ISearch {
    handleSearchStateChange: (state: string) => void;
}

const Search = ({ handleSearchStateChange }: ISearch) => {
    const [locations, setLocations] = useState<ISearchLocation[]>([]);
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
    const handleSelect = (e: SyntheticEvent<Element, Event>, value: string | null) => {
        if (value) {
            localStorage.setItem("lastLocation", value);
            handleSearchStateChange(value);
        }
    };

    const debouncedSearch = debounce(handleSearch, 400);

    useEffect(() => {
        if (open) {
            setLoading(prev => !prev);

            (async () => {
                const response = await getSearchLocation(search || localStorage.getItem("lastLocation")!);
                setLocations(() => response as ISearchLocation[]);
                setLoading(prev => !prev);
            })();
        }
    }, [search]);

    useEffect(() => {
        if (!open) {
            setLocations([]);
        }
    }, [open]);

    return (
        <Autocomplete
            id="search-autocomplete"
            options={locations.map(location => location.name)}
            loading={loading}
            filterOptions={(option, state) => option}
            onChange={handleSelect}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            renderInput={params => (
                <TextField
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...params}
                    label="Enter your location..."
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                    value={search}
                    onChange={debouncedSearch}
                />
            )}
        />
    );
};

export default Search;
