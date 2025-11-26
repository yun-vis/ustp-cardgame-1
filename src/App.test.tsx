import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App'; // Make sure this path matches where your App.tsx is

describe('App Component', () => {
  it('renders successfully', () => {
    // This is a simple "smoke test" to see if the app crashes
    render(<App />); 
    // If your App has text like "Vite + React", check for it:
    // expect(screen.getByText(/Vite/i)).toBeInTheDocument();
    expect(true).toBe(true); // Placeholder assertion
  });
});