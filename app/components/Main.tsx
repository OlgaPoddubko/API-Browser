'use client';

import { useState } from 'react';
import SearchBar from './SearchBar';
import DataTable from './DataTable';
import { Box, Container, Pagination  } from '@mui/material';
import useGitHubRepositories from '../hooks/useGitHubRepositories';

const Main = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const { repositories, totalPages, loading } = useGitHubRepositories(searchQuery, currentPage);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    return (
        <Container>
            <Box my={4}>
                <SearchBar onSearch={handleSearch} />
                <DataTable data={repositories} loading={loading} />
                <Box display="flex" justifyContent="center" mt={2}>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default Main;
