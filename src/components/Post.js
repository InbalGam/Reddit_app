import Comments from './Comments';
import styles from './styles/Post.css';
import { timeAgo } from './Utilities/utilities';

function Post(props) {
    return ( 
        <li key={props.ind}>
            <div className="post">
                <h4>{props.el.title}</h4> 
                {props.el.thumbnail !== 'self' && props.el.thumbnail !== 'default' ? <img src={props.el.thumbnail} alt='post image' styles={styles.img}/> : ''}
                <p>{props.el.author}</p>
                <Comments el={props.el} />
                <p>{props.el.numComments}</p>
                <p>{props.el.ups - props.el.downs}</p>
                <p>{timeAgo(props.el.timeCreated)}</p>
            </div>
        </li>);
}

export default Post;