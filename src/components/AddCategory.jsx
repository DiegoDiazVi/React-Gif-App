import React, { Fragment, useState } from 'react';

export const AddCategory = ({onNewCategory, onDeleteCategories}) => {
    //hook
    const [inputValue, setInputValue] = useState('');
    //evento para setear el input
    const onInputChange = (e) =>{
        //e.target.value saca el valor que escribimos
        setInputValue(e.target.value);
    }
    //Evento para el submit
    const onSubmit = (e) => {
        //previene el comportamiento por defecto 
        e.preventDefault();
        //valida que el valor ingresado al menos tenga mas de 1 caracter, de lo contrario no lo agrega
        const cleanInpuntValue = inputValue.trim();
        if (cleanInpuntValue.length<=1) {
            return;
        }
        onNewCategory(cleanInpuntValue);
        setInputValue('');
    }
    //Evento que elimina todas las imagenes
    const onDelete = () => onDeleteCategories();
    
    return (
        <Fragment>
            <form className='form-container' onSubmit={ onSubmit }>
                <input 
                    type="text"
                    placeholder = 'Buscar gifs' 
                    value={inputValue}
                    onChange = { onInputChange }
                />
            </form>
            <div className='button-container'>
                <button onClick={onDelete}>Limpiar</button>
            </div>
        </Fragment>
    )
}
