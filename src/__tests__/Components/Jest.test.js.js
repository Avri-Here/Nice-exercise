import { render, screen } from '@testing-library/react';
import Header from "../../Components/Header.jsx";

test('Test num1 Header', () => {
  render(<Header />);
  const linkElementh1 = screen.getByText(/Welcome to Avery's project../i);
  const linkElementh3 = screen.getByText(/Add a new worker ../i);
  expect(linkElementh1.textContent).toContain("Welcome to Avery's project..");
  expect(linkElementh3.textContent).toContain("Add a new worker ..");
});
