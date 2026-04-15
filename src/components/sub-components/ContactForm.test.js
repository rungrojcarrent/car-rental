import "@testing-library/jest-dom";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

describe('ContactForm component', () => {
  test('renders form elements correctly', () => {
    render(<ContactForm />);

    // Check for specific labels
    expect(screen.getByText('ชื่อเต็ม')).toBeInTheDocument();
    expect(screen.getByText('อีเมล')).toBeInTheDocument();
    expect(screen.getByText('บอกเราเกี่ยวกับเรื่องนี้')).toBeInTheDocument();

    // Check for corresponding input fields by their role or id
    expect(screen.getByPlaceholderText('เช่น สมชาย ใจดี')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('ตัวอย่าง example@email.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('กรุณาพิมพ์ข้อความของคุณที่นี่')).toBeInTheDocument();
  });

  test('allows user to enter input into form fields', () => {
    render(<ContactForm />);

    const nameInput = screen.getByPlaceholderText('เช่น สมชาย ใจดี');
    const emailInput = screen.getByPlaceholderText('ตัวอย่าง example@email.com');
    const messageInput = screen.getByPlaceholderText('กรุณาพิมพ์ข้อความของคุณที่นี่');

    // Enter values into the input fields
    userEvent.type(nameInput, 'John Doe');
    userEvent.type(emailInput, 'john@example.com');
    userEvent.type(messageInput, 'Hello, I have a question.');

    // Verify the values are updated
    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(messageInput).toHaveValue('Hello, I have a question.');
  });


  test('form submission triggers preventDefault', () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole('button', { name: /ส่งข้อความ/i });

    // We can spy on the preventDefault function by creating a mock event
    // and passing it directly to the button's onClick handler



    // Test the button click

    // Because fireEvent.click might not use our mock event properly for preventDefault
    // we can use a different approach by spying on Event.prototype.preventDefault

    const preventDefaultSpy = jest.spyOn(Event.prototype, 'preventDefault');

    fireEvent.click(submitButton);

    expect(preventDefaultSpy).toHaveBeenCalled();

    preventDefaultSpy.mockRestore();
  });

});
