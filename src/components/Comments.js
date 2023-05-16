import { useState } from 'react';


function Comments(props) {
    const [showingComments, setShowingComments] = useState(false);

    function showComments(e) {
        setShowingComments(true);
    };


    return (
        <div className="comments_container">
            <button onClick={showComments} >Comments</button>
            {showingComments === false ? '' : <ul>{props.comments.map((el, ind) => <li key={ind}>{el}</li>)}</ul>}
            <p>{props.comments.length}</p>
        </div>
    );
}

export default Comments;