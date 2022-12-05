import { fireEvent, render, screen } from '@testing-library/react';
import Header from "../../Components/Header.jsx";
import FormInput from "../../Components/FormInput";
import ListOfWorkers from "../../Components/ListOfWorkers.jsx";

test('Test num1 Header', () => {
  render(<Header />);
  const linkElementh1 = screen.getByText(/Welcome !/i);
  const linkElementh3 = screen.getByText(/Add a new ../i);
  expect(linkElementh1.textContent).toContain("Welcome");
  expect(linkElementh3.textContent).toContain("Add a new ..");
});
test('Test num2 FormInput', () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<FormInput onSubmit={onSubmit} />);
  // fireEvent.submit(getByTestId("form"));
  // expect(onSubmit).toHaveBeenCalled(1);
});
