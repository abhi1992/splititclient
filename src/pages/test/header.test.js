import Header from "../header";
import { act } from '@testing-library/react';
import { screen, render } from '@testing-library/react';
import React from 'react';

describe('Tag list entry page test case', () => {
  it('When tag is simple on initial render', () => {
    act(() => {
      render(<Header/>);
    });
    expect(screen.getByText('Split It')).toBeDefined();
  });
});