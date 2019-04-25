import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from "axios";

import WeekComponent from "../components/WeekComponent";

jest.mock("./services/__mocks__/openWeatherMap.js");

configure({ adapter: new Adapter() });

describe("WeekComponent", () => {
  const props = {};
  const wrapper = shallow(<WeekComponent {...props} />);

  test("renders the wrapper div", () => {
    expect(wrapper.find(".wrapper").length).toBe(1);
  });
  
  describe("When status is loading", () => {
    const wrapper = shallow(<WeekComponent {...props} />);
    wrapper.setState({ status: "loading" });
    test("renders Loading text when the status is loading", () => {
      expect(wrapper.find("#load").length).toBe(1);
    });
  });

  describe("When status is completed but no data was received", () => {
    const wrapper = shallow(<WeekComponent {...props} />);
    wrapper.setState({ forcast: [], status: "completed" });
    test("renders no info feedback", () => {
      expect(wrapper.find("#no-info").length).toBe(1);
    });
  });

  describe("When an error occured", () => {
    const wrapper = shallow(<WeekComponent {...props} />);
    wrapper.setState({ status: "error" });
    test("renders error information", () => {
      expect(wrapper.find("#error-info").length).toBe(1);
    });
  });

  test("should fetch weather details", done => {
  
    setTimeout(()=> {
          wrapper.update();

          const state = wrapper.instance().state;
          expect(state.forecast.length).toEqual(12);
          expect(state.status).toEqual('completed');
          expect(wrapper.find('DayComponent').length).toEqual(12);
          done();
      }, 3000);
    });
});
