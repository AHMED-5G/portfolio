import * as React from "react";
import renderer from "react-test-renderer";
import App from "../../../App";
import { Home } from "../../screens/Home";

it("renders correctly", async () => {
  renderer.create(<App />);
});

// test("renders correctly", async () => {
//   const tree = renderer.create(<Home />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
