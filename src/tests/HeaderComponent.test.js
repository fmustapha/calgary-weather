import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HeaderComponent  from '../components/HeaderComponent';

configure ({ adapter: new Adapter() });

const setUp = (props={}) => {
    const component = shallow(<HeaderComponent {...props} />);
    return component;
}

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    test('should render a heading', () => {
        const wrapper = component.find('.heading');
        expect(wrapper.length).toBe(1);
    });

    test('should render a description', () => {
        const wrapper = component.find('.description');
        expect(wrapper.length).toBe(1);
    });
});
