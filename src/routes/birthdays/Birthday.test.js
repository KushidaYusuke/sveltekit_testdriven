import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Birthday from './Birthday.svelte';

describe('Birthday', () => {
  const exampleBirthday = {
    name: 'taro',
    dob: '1000-01-01', //day of birth
  };

  it('displays the birthday of the person', () => {
    render(Birthday, {
      ...exampleBirthday,
      dob: '1999-10-28'
    });
    expect(
      screen.queryByText('1999-10-28')
    ).toBeVisible();
  });

  it('displays the name of the person', () => {
    render(Birthday, {
      ...exampleBirthday,
      name: 'yusuke'
    });
    expect(
      screen.queryByText('yusuke')
    ).toBeVisible();
  });
});

