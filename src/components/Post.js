import styles from './styles/Post.css';
import StraightOutlinedIcon from '@mui/icons-material/StraightOutlined';
import { useState } from 'react';
import PostData from './PostData';


function Post(props) {
    const [likeCalc, setLikeCalc] = useState({
        ups: props.el.ups,
        downs: props.el.downs
    });
    
    function handleClickUp(e) {
        let newUps = likeCalc.ups;
        let newDowns = likeCalc.downs;
        newUps = likeCalc.ups + 1;
        setLikeCalc({
            ups: newUps,
            downs: newDowns 
        });
    };

    function handleClickDown(e) {
        let newUps = likeCalc.ups;
        let newDowns = likeCalc.downs;
        newDowns = likeCalc.downs + 1;
        setLikeCalc({
            ups: newUps,
            downs: newDowns 
        });
    };


    return ( 
        <li key={props.ind}>
            <div className="post">
                <div className='postLikes'>
                    <button onClick={handleClickUp} className='upArrow'><StraightOutlinedIcon /></button>
                    <p>{likeCalc.ups - likeCalc.downs}</p>
                    <button onClick={handleClickDown} className='downArrow'><StraightOutlinedIcon /></button>
                </div>
                <div className='postHeaderData'>
                    <div className='postHeader'>
                        <h1>{props.el.title}</h1> 
                        {props.el.post_hint === 'image' ? <img className='postImg' src={props.el.url} alt='post image' styles={styles.img}/> : ''}
                    </div>
                    <PostData el={props.el}/>
                </div>
            </div>
        </li>);
}

export default Post;