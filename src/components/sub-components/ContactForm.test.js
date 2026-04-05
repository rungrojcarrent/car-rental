import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from './ContactForm';

describe('ContactForm Component', () => {
  it('matches the snapshot', () => {
    const { container } = render(<ContactForm />);
    expect(container).toMatchSnapshot();
  });

  it('renders the form element correctly', () => {
    render(<ContactForm />);
    const form = document.querySelector('form');
    expect(form).toBeInTheDocument();
  });

  it('prevents default form submission when submit button is clicked', () => {
    render(<ContactForm />);

    // Select the button by its type instead of text to avoid hardcoded text strings
    const submitButton = document.querySelector('button[type="submit"]');

    const preventDefaultSpy = jest.spyOn(Event.prototype, 'preventDefault');

    fireEvent.click(submitButton);

    expect(preventDefaultSpy).toHaveBeenCalled();

    preventDefaultSpy.mockRestore();
  });
});
