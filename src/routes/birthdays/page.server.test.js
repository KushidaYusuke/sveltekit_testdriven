import { describe, it, expect } from 'vitest';
import { load } from './+page.server.js';
describe('/birthdays - load', () => {
  it('returns a fixture of two items', () => {
    const result = load();
    expect(result.birthdays).toEqual([
      { name: 'Hercules', dob: '1999-10-28' },
      { name: 'Athena', dob: '2000-01-01' }
    ]);
  });
});
