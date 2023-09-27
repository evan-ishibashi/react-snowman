import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

it('should only allow six wrong guesses', function () {
  const { container } = render(
    <Snowman maxGuesses={6} />);

  const buttonArea = container.querySelector('.Snowman-letters');

  fireEvent.click(container.findElementByAttribute('key', 'b'));
  fireEvent.click(container.findElementByAttribute('key', 'c'));
  fireEvent.click(container.findElementByAttribute('key', 'd'));
  fireEvent.click(container.findElementByAttribute('key', 'z'));
  fireEvent.click(container.findElementByAttribute('key', 'y'));
  fireEvent.click(container.findElementByAttribute('key', 'o'));

  expect(buttonArea).not.toBeInTheDocument();
});