import React, { Fragment } from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { PropTypes } from 'prop-types';

//recibe la propiedad categoria o el nombre del input
export const GifGrid = ({category}) => {

    /* Uso del Hook creado que pretende retornar un objeto con el array de imagenes y el bool de isLoading 
    y se le envia al hook como parametro la categoria */
    const {images, isLoading} = useFetchGifs( category );

    return (
        <Fragment>
            {/* Nombre de la categoria */}
            <h3>{category}</h3>
            {
                isLoading && <h2>Cargando gifs</h2>
            }
            {/* Importante para nombrar clases no se usa class='clase' sino className='clase' */}
            <div className='card-grid'>
                {
                    // Iteración del array images para renderizar
                    images.map( (image) => {
                        return (
                            // Se llama el nuevo componente GifGridItem y se envia propiedades
                            <GifGridItem 
                                // Se agrega el keu que es el id de la imagen
                                key={image.id}
                                // De esta manera enviamos todas las propiedades de image
                                {...image}
                            />
                        ) 
                    })
                }
            </div>
        </Fragment>
    )
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired
}