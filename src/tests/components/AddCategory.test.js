import { waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");

describe('test on <AddCategory></AddCategory>', () => {
    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);
    test('must show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('must be change text input', () => {
        const input = wrapper.find('input');
        const value = 'Samurai X'
        input.simulate('change', { 
            target: {
                value
            }
        });
        
        expect( wrapper.find('p').text().trim() ).toBe(value) ;
    });

    test('should not post the information ', () => {
        
    });
});