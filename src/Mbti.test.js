import { render, screen } from "@testing-library/react";
import Mbti from "./Mbti";

test("renders learn react link", () => {
  render(<Mbti />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
