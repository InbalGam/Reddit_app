import { useState } from 'react';

function Search() {
    const [text, setText] = useState('');

    function handleTextChange(e) {
        setText(e.target.value);
    };


    return (
        <div className="search">
            <form>
                <input id='search' type='text' value={text} onChange={handleTextChange} name='search' className='search_input' placeholder='Search' />
                <input type="submit" value="Submit" className='submit' />
            </form>
        </div>
    );
}

export default Search;