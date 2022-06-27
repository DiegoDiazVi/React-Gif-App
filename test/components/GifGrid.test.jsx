import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

/* Mock del custom hook con jest.mock, se debe importar el custom hook */
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebs en <GifGrid/>', () => {
/* Props del componente */
    const category = 'DBZ';

    test('Debe de mostrar el loading inicialmente', () => {
/*  Nombre del custom Hook con la función de jest mockReturnValue que nos retorna lo que esperamos de ese hook, en este caso
    un array de imagenes y un boolean de isLoading */
        useFetchGifs.mockReturnValue({
            images : [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        /* Verifica que se este cargando los gifs  */
        expect(screen.getByText('Cargando gifs'))
        /* Verifica el nombre de la categoria  */
        expect(screen.getByText(category));
    });

    test('Debe de mostrar items cuando se cargan las imagenes', () => { 
        /* Array de imagenes simulado para la prueba */
        const gifs = [
            {
                id: 'asd',
                title: 'DBZ',
                url: 'https://localhost/DBZ.jpg'
            },
            {
                id: '12d',
                title: 'Avengers',
                url: 'https://localhost/Avengers.jpg'
            }
        ]
        /* Uso de la funcion de jest y el custom hook enviando ahora parametros seteados y el bool en false */
        useFetchGifs.mockReturnValue({
            images : gifs,
            isLoading: false
        });
        render(<GifGrid category={category}/>);
        /* Espera que hayan dos imagenes */
        expect(screen.getAllByRole('img').length).toBe(2);
    });
    
});