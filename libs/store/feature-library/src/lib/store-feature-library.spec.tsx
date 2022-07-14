import { render } from "@testing-library/react";

import StoreFeatureLibrary from "./store-feature-library";

describe("StoreFeatureLibrary", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<StoreFeatureLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
