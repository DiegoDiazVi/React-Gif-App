import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //Hook useState de las categorias he inicia por defecto con la categoria Avengers
    const [categories, setCategories] = useState(['Avengers']);

    // evento que recibe la nueva categoria y la agrega al estado
    const onAddCategory = (newCategory) =>{
        // Validación del key, si categorias ya tiene la nueva categoria no se agrega
        if(categories.includes(newCategory)){
            return;
        }
        // Agregación de la nueva categoria al estado
        setCategories([newCategory,...categories]);
    } 
    const onCleanCategories = () => {
        setCategories([]);
    }
    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory 
                // Evento que llama al onAddCategory para añadir una categoria
                onNewCategory={ event => onAddCategory(event) }
                onDeleteCategories= {onCleanCategories}
            />
            <hr />   
            {
                /* Por cada categoria se renderiza el componente GifGrid con el key y se envia la prop
                de categoria a ese componente */
                categories.map( category => {
                    return (
                        <GifGrid  
                            key={category} 
                            category={category}
                        />
                    )
                })
            }
        </Fragment>
    );
}
