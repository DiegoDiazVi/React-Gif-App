import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGis', () => {

    test('Debe de retornar un arreglo de gifs', async () => {
        const gifs = await getGifs('Goku');
        expect(gifs.length).toBe(20);
        expect(gifs[0]).toEqual({
            id   : expect.any(String),
            title: expect.any(String),
            url  : expect.any(String),
        })
    });
});