import Comments from './Comments';
import styles from './styles/Post.css';
import { timeAgo } from './Utilities/utilities';
import StraightOutlinedIcon from '@mui/icons-material/StraightOutlined';
import { useState } from 'react';

function Post(props) {
    const [likeCalc, setLikeCalc] = useState({
        ups: props.el.ups,
        downs: props.el.downs
    });

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
                        <p>{props.el.author}</p>
                        <div className='postComments'>
                            <Comments el={props.el} />
                            <p>{props.el.numComments}</p>
                        </div>
                        <p>{timeAgo(props.el.timeCreated)}</p>
                    </div>
                </div>
            </div>
        </li>);
}

export default Post;