import { Link } from 'react-router-dom';
import { useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './Store/postsSlice';
import { v4 as uuidv4 } from 'uuid';

function Community() {
    const [community, setCommunity] = useState('');
    const dispatch = useDispatch();
    const options = [{value: 'golf', label: 'Golf'}, {value: 'crossfit', label: 'Crossfit'}];

    function handleSelectChange(choice) {
        setCommunity(choice.value);
        dispatch(changePosts({
            id: uuidv4(),
            headline: 'headline example 3',
            image: 'img',
            userName: 'Inbal 2',
            comments: ['string1', 'string2', 'string3'],
            likes: 150,
            dislikes: 5,
            timePosted: '8 hrs ago'
        }));
    };


    return (
        <div className="community_container">
            <h3>Popular Communities</h3>
            {/*just as an example: */}
            <Link to="https://www.reddit.com/r/golf/">Golf link</Link>
            <br/>
            <Link to="https://www.reddit.com/r/crossfit/">Crossfit link</Link>

            <Select defaultValue={options[0]} options={options} onChange={handleSelectChange} className='select' />
        </div>
    );
}

export default Community;