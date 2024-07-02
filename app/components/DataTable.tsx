'use client';

import React from 'react';
import { CSVLink } from 'react-csv';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Skeleton } from '@mui/material';

interface DataTableProps {
    data: any[];
    loading: boolean;
}

const DataTable = ({ data, loading }: DataTableProps) => {
    const headers = [
        { label: 'Name', key: 'name' },
        { label: 'Description', key: 'description' },
        { label: 'URL', key: 'html_url' },
    ];

    const csvReport = {
        filename: 'Report.csv',
        headers: headers,
        data: data,
    };

    console.log(data);

    return (
        <div>
            <CSVLink {...csvReport} style={{ display: 'block', margin: '16px 0 16px' }}>
                <Button variant="outlined" color="primary">
                    Download CSV
                </Button>
            </CSVLink>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>URL</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            [...Array(5)].map((_, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Skeleton />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton />
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            data.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell>
                                        <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                                            Link
                                        </a>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DataTable;
