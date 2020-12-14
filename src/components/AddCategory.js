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

    return (
        <form onSubmit = { handleSubmit }>
            <input 
                type="text"
                value={inputValue}
                onChange={(evt) => setInputValue(evt.target.value)}
            ></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired

}