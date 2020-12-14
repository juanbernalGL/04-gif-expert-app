import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';
// import PropTypes from 'prop-types'

const GifExpertApp = props => {
    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Ranma 1/2'] );
    //     setCategories( cats => [...cats, 'Ranma 1/2'] );
    // }
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                { categories.map( category => 
                    <GifGrid category={ category} key={ category }/>
                ) }
            </ol>
            
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
