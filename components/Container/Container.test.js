import React from "react";
import { render } from "@testing-library/react-native";
import { Text } from "react-native";
import Container from "./Container";

jest.mock("@react-navigation/stack", () => ({
  __esModule: true,
  useHeaderHeight: jest.fn(() => 12),
}));

describe("<Container />", () => {
  it("should render", () => {
    const { getByText } = render(
      <Container>
        <Text>Hello world</Text>
      </Container>
    );

    expect(getByText("Hello world")).toBeTruthy();
  });
});
