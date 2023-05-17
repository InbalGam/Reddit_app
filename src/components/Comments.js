import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { loadComments } from './Store/postsSlice';
import ClipLoader from 'react-spinners/ClipLoader';
import Comment from './Comment';
import { getComments } from './Utilities/Reddit_API';

function Comments(props) {
    const [showingComments, setShowingComments] = useState(false);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    

    const [comments, setComments] = useState([]);

    async function showComments(e) {
        setIsLoading(true);
        setShowingComments(!showingComments);
        const results = await getComments(props.el.permalink);
        const data = results[1].data.children.map(el => {
            return {
                author: el.data.author,
                ups: el.data.ups,
                downs: el.data.downs,
                body: el.data.body,
                timeCreated: new Date(el.data.created * 1000),
            };
        });
        setComments(data);
        setIsLoading(false);
    };


    return (
        <div className="comments_container">
            <button onClick={showComments} >Comments</button>
            {showingComments === false ? '' : (isLoading ? <ClipLoader color={'#3c0c21'} size={80} /> : <ul>{comments.map((el, ind) => <Comment el={el} ind={ind}/>)}</ul> )}
        </div>
    );
}

export default Comments;