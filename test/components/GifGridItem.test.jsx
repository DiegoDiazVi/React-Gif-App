import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('Test a GifGridItem', () => {
    const title = 'Soy un gif';
    const url   = 'https://gif.com/titulo.jpg';

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render( <GifGridItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con la url y alt indicado', () => {
        render( <GifGridItem title={title} url={url}/>);
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe de mostrar el titulo en el componente', () => {
        render( <GifGridItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    });
});