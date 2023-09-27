import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

it('should only allow six wrong guesses', function () {
  const { container } = render(
    <Snowman maxGuesses={6} />);

  const buttonArea = container.querySelector('.Snowman-letters');


  fireEvent.click(buttonArea.querySelector('[value="b"]'));
  fireEvent.click(container.querySelector('[value="c"]'));
  fireEvent.click(container.querySelector('[value="d"]'));
  fireEvent.click(container.querySelector('[value="z"]'));
  fireEvent.click(container.querySelector('[value="y"]'));
  fireEvent.click(container.querySelector('[value="o"]'));

  const youLose = container.querySelector('.Snowman-lose');
  const answer = container.querySelector('.Snowman-word');

  expect(buttonArea).not.toBeInTheDocument();
  expect(youLose).toBeInTheDocument();
  expect(answer).toEqual("apple");
});