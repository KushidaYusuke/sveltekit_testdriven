import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";
import BirthdayForm from './BirthdayForm.svelte';
//import '@testing-library/jest-dom';

describe("BirthdayForm", () => {
  it('displays a form', () => {
    render(BirthdayForm);
    expect(screen.queryByRole('form')).toBeVisible();
  });
  
  it('has a form method of POST', () => {
    render(BirthdayForm);
    const form = screen.getByRole('form');
    expect(form).toHaveAttribute('method', 'post');
  });

  it('displays a button to save a form', () => {
    render(BirthdayForm);
    expect(screen.queryByRole('button')).toBeVisible();
  });

  describe('name field', () => {
    it('displays a text field for the contact name', () => {
      render(BirthdayForm);
      const field = screen.queryByLabelText('Name', { selector: 'input[type=text]' });
      expect(field).toBeVisible();
      expect(field).toHaveAttribute('name', 'name');
    });
  });
});

