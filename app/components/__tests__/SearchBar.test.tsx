import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

test('SearchBar renders correctly and calls onSearch with input value', () => {
    const handleSearch = jest.fn();
    render(<SearchBar onSearch={handleSearch} />);

    const input = screen.getByLabelText('Search');
    const button = screen.getByRole('button', { name: 'Search' });

    fireEvent.change(input, { target: { value: 'test query' } });
    fireEvent.click(button);

    expect(handleSearch).toHaveBeenCalledWith('test query');
});

