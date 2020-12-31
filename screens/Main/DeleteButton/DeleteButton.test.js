import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import DeleteButton from "./DeleteButton";

describe("<DeleteButton />", () => {
  it("should render", () => {
    const { getByText } = render(<DeleteButton title="speak" />);

    expect(getByText("speak")).toBeTruthy();
  });

  it("should call function when pressed", () => {
    const mockedFunction = jest.fn();
    const { getByText } = render(
      <DeleteButton title="speak" onPress={mockedFunction} />
    );

    const button = getByText("speak");
    fireEvent.press(button);

    expect(mockedFunction).toHaveBeenCalled();
  });
});
