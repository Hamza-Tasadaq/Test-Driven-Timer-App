import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from './Display'

test('Hour Test', () => {
    render(<Display
        seconds={0}
        minutes={0}
        hour={0} />);
    const linkElement = screen.getByTestId(/hour/i)
    expect(linkElement).toBeInTheDocument();
});

test('Minute Test', () => {
    render(<Display
        seconds={0}
        minutes={0}
        hour={0} />);
    const linkElement = screen.getByTestId(/minutes/i)
    expect(linkElement).toBeInTheDocument();
});

test('Second Test', () => {
    render(<Display
        seconds={0}
        minutes={0}
        hour={0} />);
    const linkElement = screen.getByTestId(/seconds/i)
    expect(linkElement).toBeInTheDocument();
});
