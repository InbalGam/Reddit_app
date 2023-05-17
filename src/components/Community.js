import { Link } from 'react-router-dom';
import { useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { loadPosts } from './Store/postsSlice';

function Community() {
    const [community, setCommunity] = useState('');
    const dispatch = useDispatch();
    const options = [{value: 'golf', label: 'Golf'}, {value: 'crossfit', label: 'Crossfit'}];

    async function handleSelectChange(choice) {
        setCommunity(choice.value);
        dispatch(loadPosts(choice.value));
    };


    return (
        <div className="community_container">
            <h3>Popular Communities</h3>
            <Select defaultValue={options[0]} options={options} onChange={handleSelectChange} className='select' />
        </div>
    );
}

export default Community;