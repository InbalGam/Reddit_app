import Comments from './Comments';
import styles from './styles/Post.css';
import { timeAgo } from './Utilities/utilities';

function Post(props) {
    return (
        props.posts.map((el, ind) => 
        <li key={ind}>
            <div className="post">
                <h4>{el.title}</h4> 
                <img src={el.thumbnail} alt='post image' styles={styles.img}/>
                <p>{el.author}</p>
                <Comments el={el} />
                <p>{el.numComments}</p>
                <p>{el.ups - el.downs}</p>
                <p>{timeAgo(el.timeCreated)}</p>
            </div>
        </li>)
    );
}

export default Post;