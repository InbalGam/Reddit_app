import Comments from './Comments';
import styles from './styles/Post.css';
import { timeAgo } from './Utilities/utilities';
import StraightOutlinedIcon from '@mui/icons-material/StraightOutlined';
import { useState } from 'react';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { getComments } from './Utilities/Reddit_API';

function Post(props) {
    const [likeCalc, setLikeCalc] = useState({
        ups: props.el.ups,
        downs: props.el.downs
    });
    const [showingComments, setShowingComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleClick(e) {
        const className = e.target.className;
        let newUps = likeCalc.ups;
        let newDowns = likeCalc.downs;
        if (className === 'upArrow') {
            newUps = likeCalc.ups + 1;
        } else {
            newDowns = likeCalc.downs + 1;
        }
        setLikeCalc({
            ups: newUps,
            downs: newDowns 
        });
    };


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
        <li key={props.ind}>
            <div className="post">
                <div className='postLikes'>
                    <button onClick={handleClick}><StraightOutlinedIcon className='upArrow'/></button>
                    <p>{likeCalc.ups - likeCalc.downs}</p>
                    <button onClick={handleClick}><StraightOutlinedIcon className='downArrow'/></button>
                </div>
                <div className='postHeaderData'>
                    <div className='postHeader'>
                        <h1>{props.el.title}</h1> 
                        {props.el.post_hint === 'image' ? <img className='postImg' src={props.el.url} alt='post image' styles={styles.img}/> : ''}
                    </div>
                    <div className='postData'>
                        <p className='postAuthor'>{props.el.author}</p>
                        <p>{timeAgo(props.el.timeCreated)}</p>
                        <div className='commentsAndNum'>
                            <button onClick={showComments} ><ModeCommentOutlinedIcon /></button>
                            <p>{props.el.numComments}</p>
                        </div>
                    </div>
                    <div className='postComments'>
                        <Comments isLoading={isLoading} showingComments={showingComments} comments={comments}/>
                    </div>
                </div>
            </div>
        </li>);
}

export default Post;