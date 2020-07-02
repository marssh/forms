import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BoxList } from './BoxList';

//smoketest

it('testing if page renders', () => {
  render(<BoxList />);
});

it('creating and testing snapshots', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it('test if inputs change', () => {
  const { getByLabelText } = render(<BoxList />);
  const input = getByLabelText('Background Color');
  
  fireEvent.change(input, { target: { value: 'blue' } });
  expect(input.value).toEqual('blue');
});

it('submit', () => {
  const { getByText, getByLabelText, queryByTestId } = render(<BoxList />)
  const input = getByLabelText('Background Color');
  const height = getByLabelText('Height');
  const width = getByLabelText('Width');
  const button = getByText('Send');

  fireEvent.change(input, { target: { value: 'blue' } });
  fireEvent.change(height, { target: { value: '100' } });
  fireEvent.change(width, { target: { value: '100' } });

  fireEvent.click(button);
  expect(queryByTestId('1')).toBeInTheDocument();
})

it('remove box', () => {
  const { getByText, getByLabelText, queryByTestId } = render(<BoxList />)
  // add
  const input = getByLabelText('Background Color');
  const height = getByLabelText('Height');
  const width = getByLabelText('Width');
  const button = getByText('Send');

  fireEvent.change(input, { target: { value: 'blue' } });
  fireEvent.change(height, { target: { value: '100' } });
  fireEvent.change(width, { target: { value: '100' } });

  fireEvent.click(button);
  //end add

  const deleteButton = getByText('X');
  fireEvent.click(deleteButton);
  expect(queryByTestId('1')).not.toBeInTheDocument();
 
})