import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Hook que recibe una categoria y retorna las imagenes y si esta cargada o no
export const useFetchGifs = (category) => {

    // Hook que define el estado de las imagenes iniciando con un arreglo vacio
    const [images, setimages] = useState([]);
    // Hook que define el estado si el estado esta cargando o no iniciando con un true
    const [isLoading, setIsLoading] = useState(true)

    // Función asincrona que hace el llamado a la api
    const getImages = async () => {
        // Llamado a la api
        const newImages = await getGifs( category );
        // Update estado de las imagenes
        setimages(newImages);
        // Update estado del esta cargando
        setIsLoading(false);
    }

    /* Hook que hace el efecto que yo necesito, en este caso solo hacer el llamado a la api 
    y obetener las images y el estado de carga una sola vez */
    useEffect( () => {
        // Lo que quiero hacer, en este caso llamar a la función de la api
        getImages();
        // Cuantas veces: en este caso [] indica que una sola vez
    }, []); 

    /* El hook personalizado debe retornar un objeto con el estado de las imagenes y el esatdo de isLoading
    que es lo que recibe el componente GifGrid */
    return {
        images: images,
        isLoading: isLoading, 
    }
}
