import React from 'react';
import { render, screen } from '@testing-library/react';
import Timer from './Timer'

test('Header Text Test', () => {
    render(<Timer />);
    const linkElement = screen.getByText(/Timer App/i)
    expect(linkElement).toBeInTheDocument();
});
