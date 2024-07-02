import React, { useState } from 'react';
import { Box, Button, TextField, IconButton, InputAdornment } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    const handleClear = () => {
        setQuery('');
        onSearch('');
    };

    return (
        <Box display="flex" alignItems="center" gap={2}>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            {query && (
                                <IconButton onClick={handleClear} size="large">
                                    <ClearIcon />
                                </IconButton>
                            )}
                        </InputAdornment>
                    ),
                }}
            />
                       <Button variant="contained" color="primary" onClick={handleSearch}>
                          Search
                        </Button>
                   </Box>
    );
};

export default SearchBar;


