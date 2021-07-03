import React from 'react';
import { useForm } from 'react-hook-form';

const SearchBar = () => {

    const {register, handleSubmit, watch, formState: {errors} } = useForm();
    const onSubmit = data => {
        console.log(document.getElementById('main-search-bar'));
        
        console.log(data);
    };

    console.log(watch("SearchBar"));

    return (
        <div  className="search-bar-main">
            {/* <input type='text' placeholder='Search DailySmarty' /> */}
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type='text' placeholder='Search DailySmarty' {...register("SearchBar")} id='main-search-bar'/>
      
                <input type="submit" />

            </form>
        </div>
    )
};


export default SearchBar;