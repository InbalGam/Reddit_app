import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { timeAgo } from './Utilities/utilities';
import Comments from './Comments';
import styles from './styles/PostData.css';
import { getComments } from './Utilities/Reddit_API';
import { useState } from 'react';


function PostData(props) {
    const [showingComments, setShowingComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
                permalink: el.data.permalink
            };
        });
        setComments(data);
        setIsLoading(false);
    };

    return (
        <div>
            <div className='postData'>
                <p className='postAuthor'>{props.el.author}</p>
                <p>{timeAgo(props.el.timeCreated)}</p>
                <div className='commentsAndNum'>
                    <button onClick={showComments} ><ModeCommentOutlinedIcon /></button>
                    <p>{props.el.numComments}</p>
                </div>
            </div>
            <div className='postComments'>
                <Comments isLoading={isLoading} showingComments={showingComments} comments={comments} />
            </div>
        </div>
    );
};


export default PostData;