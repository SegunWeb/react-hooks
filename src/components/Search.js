import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";

const Search = () => {
    const [value, setValue] = useState('');
    const {show} = useContext(AlertContext);

    const onSubmit = (event) => {
        if(event.key !== 'Enter'){
            return
        }
        if(value.trim()){
            console.log('Make....' + value)
        } else {
            show('Enter user name')
        }

    };

    return (
        <div className='form-group'>
            <input
                type="text"
                className='form-control'
                placeholder='Please enter name user...'
                onKeyPress={onSubmit}
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    );
};

export default Search;