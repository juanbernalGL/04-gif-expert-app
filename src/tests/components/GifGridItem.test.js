import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGridItem from '../../components/GifGridItem';



describe('Verifies that component <GifGridItem /> display correctly', () => {
    const title = 'Compment Grid Item';
    const url = 'https://media1.giphy.com/media/6IkjQmpaRwIabJ2G3C/giphy-downsized-medium.gif?cid=a12b0e9c0s2xapm4oybeuva6a0mh4isidbuhuapdh80g2jtv&rid=giphy-downsized-medium.gif';
    let wrapper = shallow( <GifGridItem  title={title} url={url}/>);
    beforeEach(() => {
         wrapper = shallow( <GifGridItem  title={title} url={url}/>);
    })
    test('Test component <GifGridItem />  create on snapshot', () => {
        // let wrapper = shallow( <GifGridItem title={title} url={url} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('must be contains a p and an image', () => {
        const p = wrapper.find('p').text().trim();
        expect( p ).toBe( title );
    });

    test('must be contains an image, image url and image alt', () => {
        const img = wrapper.find('img');
        // console.log(img.props());
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });
    
    test('must be contain animate__fadeIn class', () => {
        const container = wrapper.find('div');
        // console.log('div', container.props());
        expect( container.prop('className') ).toContain( 'animate__fadeIn' );
        expect( container.prop('className').includes('animate__fadeIn') ).toBe( true );
        // expect( '' ).toBe('animate__fadeIn');
        // expect( '' ).toBe('')
    });
});