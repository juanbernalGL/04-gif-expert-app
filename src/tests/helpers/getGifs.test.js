const { getGifs } = require("../../helpers/getGifs");

describe('Test on getGifs', () => {
    test('must bring 10 elements', async() => {

        const gifs = await getGifs('dragon ball');
        // console.log('gifs', gifs);
        expect( gifs.length ).toBe( 10 );

        
    });    
    test('must no bring 10 elements', async() => {

        const gifs = await getGifs('');
        // console.log('gifs', gifs);
        expect( gifs.length ).toBe( 0 );

        
    });    
});