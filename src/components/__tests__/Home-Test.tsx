import * as React from "react";
import renderer from "react-test-renderer";
import App from "../../../App";

it("renders correctly", async () => {
  renderer.create(<App />);
});

//https://stackoverflow.com/questions/52569447/how-to-mock-react-navigations-navigation-prop-for-unit-tests-with-typescript-in
// test("renders correctly", async () => {
//   // const navigation = { navigate: () => {} };
//   // spyOn(navigation, "navigate");
//   // const navigation= useNavigation();
//   const tree = renderer.create(<Home  />).toJSON();
//   // expect(tree).toMatchSnapshot();
// });
