// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import SearchBar from '../SearchBar';
//
// test('SearchBar renders and works correctly', () => {
//     const handleSearch = jest.fn();
//
//     render(<SearchBar onSearch={handleSearch} />);
//
//     const input = screen.getByPlaceholderText('Search...');
//     const button = screen.getByText('Search');
//
//     userEvent.type(input, 'test query');
//     userEvent.click(button);
//
//     expect(handleSearch).toHaveBeenCalledWith('test query');
// });

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

test('SearchBar renders correctly and calls onSearch with input value', () => {
    // Mock the onSearch function
    const handleSearch = jest.fn();

    // Render the SearchBar component
    render(<SearchBar onSearch={handleSearch} />);

    // Find the input field and button
    const input = screen.getByLabelText('Search');
    const button = screen.getByRole('button', { name: 'Search' });

    // Simulate user input and click on the button
    fireEvent.change(input, { target: { value: 'test query' } });
    fireEvent.click(button);

    // Check if onSearch was called with the correct value
    expect(handleSearch).toHaveBeenCalledWith('test query');
});

