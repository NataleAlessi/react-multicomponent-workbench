import App from "./App";
import { Link } from 'react-router-dom';
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders navLinks", () => {
  const wrapper = shallow(<App />);
  const navLink = <Link className='NavigationLink' to='/githubcard'>GitHubCard</Link>;
  expect(wrapper.contains(navLink)).toEqual(true);
});
