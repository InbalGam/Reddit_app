import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadPosts } from './Store/postsSlice';
import searchImage from './styles/images/search.webp';
import styles from './styles/Search.css';

function Search() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    function handleTextChange(e) {
        setText(e.target.value);
    };


    async function search(e) {
        e.preventDefault();
        dispatch(loadPosts({term:text, type:'search'}));
    };


    return (
        <div className="search">
            <form onSubmit={search}>
                <input id='search' type='text' value={text} onChange={handleTextChange} name='search' className='searchField' placeholder='Search' />
                <button type="submit" className="searchButton">
                    <img src={searchImage} />
                </button>
            </form>
        </div>
    );
}

export default Search;