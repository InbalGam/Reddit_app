import { useState } from 'react';
import { searchReddit } from './Utilities/Reddit_API';

function Search() {
    const [text, setText] = useState('');

    function handleTextChange(e) {
        setText(e.target.value);
    };


    async function search(e) {
        e.preventDefault();
        const { subreddit, listing, limit, timeframe } = [text, 100, 'month', 'top'];
        const results = await searchReddit(subreddit, listing, limit, timeframe);
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