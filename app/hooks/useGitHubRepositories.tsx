import { useState, useEffect } from 'react';
import axios from 'axios';

const useGitHubRepositories = (searchQuery: string, currentPage: number) => {
    const [repositories, setRepositories] = useState<any[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (searchQuery.trim() !== '') {
            fetchData(searchQuery, currentPage);
        }
    }, [searchQuery, currentPage]);

    const fetchData = async (query: string, page: number) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.github.com/search/repositories`, {
                params: {
                    q: query,
                    page: page,
                    per_page: 10,
                },
            });

            const totalCount = response.data.total_count;
            const repositoriesData = response.data.items;

            setRepositories(repositoriesData);
            setTotalPages(Math.ceil(totalCount / 10));
        } catch (error) {
            console.error('Error fetching repositories:', error);
        } finally {
            setLoading(false);
        }
    };

    return { repositories, totalPages, loading, fetchData };
};

export default useGitHubRepositories;
