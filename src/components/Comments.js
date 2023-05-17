import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadComments } from './Store/postsSlice';
import ClipLoader from 'react-spinners/ClipLoader';
import Comment from './Comment';

function Comments(props) {
    const [showingComments, setShowingComments] = useState(false);
    const dispatch = useDispatch();
    const { hasCommentsError, isCommentsLoading } = useSelector((state) => state.posts);
    

    function showComments(e) {
        dispatch(loadComments({permalink: props.el.permalink, id: props.el.id}));
        setShowingComments(!showingComments);
    };


    return (
        <div className="comments_container">
            <button onClick={showComments} >Comments</button>
            {showingComments === false ? '' : 
            (hasCommentsError ? 'Could not fetch posts, try again' : (isCommentsLoading ? <ClipLoader color={'#3c0c21'} size={80} /> : <ul>{props.el.comments.map((el, ind) => <Comment el={el} ind={ind}/>)}</ul> ))}
        </div>
    );
}

export default Comments;