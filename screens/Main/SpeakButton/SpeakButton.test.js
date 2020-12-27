import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SpeakButton from "./SpeakButton";

describe("<SpeakButton />", () => {
  it("should render", () => {
    const { getByText } = render(<SpeakButton title="speak" />);

    expect(getByText("speak")).toBeTruthy();
  });

  it("should call function when pressed", () => {
    const mockedFunction = jest.fn();
    const { getByText } = render(
      <SpeakButton title="speak" onPress={mockedFunction} />
    );

    const button = getByText("speak");
    fireEvent.press(button);

    expect(mockedFunction).toHaveBeenCalled();
  });
});
