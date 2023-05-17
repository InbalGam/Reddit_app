import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadPosts } from './Store/postsSlice';

function Search() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    function handleTextChange(e) {
        setText(e.target.value);
    };


    async function search(e) {
        e.preventDefault();
        dispatch(loadPosts(text));
    };


    return (
        <div className="search">
            <form onSubmit={search}>
                <input id='search' type='text' value={text} onChange={handleTextChange} name='search' className='search_input' placeholder='Search' />
                <input type="submit" value="Submit" className='submit' />
            </form>
        </div>
    );
}

export default Search;