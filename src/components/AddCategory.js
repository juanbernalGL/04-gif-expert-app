import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(inputValue.length > 2){
            setCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    const handleInputChange = ( evt ) => {
        setInputValue(evt.target.value);
        console.log('handleInputChange Inside');
    }

    return (
        <form onSubmit = { handleSubmit }>
            <p>{ inputValue }</p>
            <input 
                type="text"
                value={inputValue}
                onChange={(evt) => handleInputChange(evt) }
            ></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired

}