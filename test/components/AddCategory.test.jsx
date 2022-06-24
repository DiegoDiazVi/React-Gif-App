import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Pruebas <AddCategory/>', () => {

    test('Debe de cambiar el valor de la caja de text', () => {
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target : {value: 'DBZ'}});
        expect(input.value).toBe('DBZ');
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'DBZ';
        /* jest.fn() es una función mock y eso es una simulación de la función */
        const onNewCategory = jest.fn();
        /* La función mock que espera se la mando de prop */
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target : {value: inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
        /* Espera que la función haya sido llamada */
        expect(onNewCategory).toHaveBeenCalled();
        /* Espera que la función haya sido llamada 1 sola vez */
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        /* Espera que la función haya sido llamada con el valor de inputValue */
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar onNewCategory si el input esta vacio', () => {
        /* jest.fn() es una función mock y eso es una simulación de la función */
        const onNewCategory = jest.fn();
        /* La función mock que espera se la mando de prop */
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        /* Espera que la función haya sido llamada 0 veces */
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        /* Espera que la función no haya sido llamada */
        expect(onNewCategory).not.toHaveBeenCalled();
    });

});