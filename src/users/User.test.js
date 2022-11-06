import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import User from './User';

const userData = {
  email: 'dummy@dummy.com',
  name: {
    first: 'fName',
  },
};

const mockUpdateUser = jest.fn();

describe('render User component', () => {
  test('render initial data, fullName', () => {
    render(<User userData={userData} updateUser={mockUpdateUser} />);
    const fullName = `${userData.name.title} ${userData.name.first} ${userData.name.last}`;
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(fullName);
  });

  test('render label', () => {
    render(<User userData={userData} updateUser={mockUpdateUser} />);
    expect(screen.getByLabelText('first name:')).toBeInTheDocument();
  });

  test('render input box with initial value', () => {
    render(<User userData={userData} updateUser={mockUpdateUser} />);
    const firstNameInputField = screen.getByRole('textbox');
    expect(firstNameInputField).toHaveDisplayValue(userData.name.first);
  });

  test('render save button', () => {
    render(<User userData={userData} updateUser={mockUpdateUser} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Save');
  });

  test('verify text change in input box', () => {
    render(<User userData={userData} updateUser={mockUpdateUser} />);
    const firstNameInputField = screen.getByRole('textbox');
    const currentValue = userData.name.first;
    expect(firstNameInputField).toHaveValue(currentValue);

    const typedValue = 'arun';
    userEvent.type(firstNameInputField, typedValue);
    const updatedValue = currentValue + typedValue;
    expect(firstNameInputField).toHaveValue(updatedValue);
  });

  test('verify save button click', () => {
    render(<User userData={userData} updateUser={mockUpdateUser} />);
    const saveButton = screen.getByRole('button');

    expect(saveButton).toBeInTheDocument();
    userEvent.click(saveButton);
    expect(mockUpdateUser).toHaveBeenCalledWith(userData);
  });

  test('verify form submission on enter key press', () => {
    render(<User userData={userData} updateUser={mockUpdateUser} />);
    const firstNameInputField = screen.getByRole('textbox');
    firstNameInputField.focus();
    expect(firstNameInputField).toHaveFocus();
    userEvent.keyboard('{Enter}');
    expect(mockUpdateUser).toHaveBeenCalledWith(userData);
  });
});
