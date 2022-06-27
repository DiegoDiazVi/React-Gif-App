import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook de useFetchGifs', () => { 

    test('Debe de retornarn el estado inicial', () => {
        /* Se usa renderHook para evitar problemas ya que deben
        ir alineados con sus componentes y renderHook tiene 
        varias propiedades pero desestrcuturamos result, renderHook
        recibe como parametro un callback del hook a evaluar*/
        const {result} = renderHook( () => useFetchGifs('DBZ'));
        /* Desestructuración del result lo cual nos tira 
        un objeto current con los valores del return del hook,
        en este caso images y isLoading */
        const {images, isLoading} = result.current
        /* Se espera que imagenes sera 0 */
        expect(images.length).toBe(0);
        /* Se espera que isLoading sea true */
        expect(isLoading).toBeTruthy();
    });

    /* Esta es una función Async dado a que se debe esperar 
    el comportamiento o acciones del hook, en este caso el llamado
    a la api */
    test('Debe de retornarn un arreglo de imagenes y false de isLoading', async () => {
        /* Se realiza lo mismo del anterior test */
        const {result} = renderHook( () => useFetchGifs('DBZ'));
        /* Se usa waitFor() que es una propiedad de Testing library para
        esperar la promesa y se le envia como parametro una función
        donde se espera que las imagenes sean mayores a 0 */
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
        );
        /* Se desestructura igual al test anterior */
        const {images, isLoading} = result.current
        /* Se evalua que imagenes sea mayor a 0 y 
        isLoading sea false */
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });
});