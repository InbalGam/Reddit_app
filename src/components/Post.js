import example from './images/example.jpg';
import Comments from './Comments';
import styles from './styles/Post.css';

/* Post example- 
{
    headline: 'string',
    image: img,
    userName: name,
    comments: ['string1', 'string2'],
    likes: 100,
    dislikes: 3,
    timePosted: '12 hrs ago'
}*/

function Post(props) {
    return (
        props.posts.map((el, ind) => 
        <li key={ind}>
            <div className="post">
                <h4>{el.headline}</h4> 
                <img src={example} alt='example image for a post' styles={styles.img}/>
                <p>{el.userName}</p>
                <Comments comments={el.comments} />
                <p>{el.likes - el.dislikes}</p>
                <p>{el.timePosted}</p>
            </div>
        </li>)
    );
}

export default Post;