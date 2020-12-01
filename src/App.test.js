import App from "./App";
import { Link } from 'react-router-dom';
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders navLinks", () => {
  const wrapper = shallow(<App />);
  const navLink = <Link className='NavigationLink' exact to='/GitHubCard'>GitHubCard</Link>;
  expect(wrapper.contains(navLink)).toEqual(true);
});
