import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Root from './root';

describe('App', () => {
    it('Renders hello world', () => {
        //  ARRANGE
        render(<Root />);
        // ACT
        // EXPECT
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Hello World');
    });
});
