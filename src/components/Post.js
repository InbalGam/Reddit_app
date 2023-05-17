import example from './images/example.jpg';
import Comments from './Comments';
import styles from './styles/Post.css';

/* Post example- 
                author: el.data.author_fullname,
                title: el.data.title,
                url: el.data.url,
                score: el.data.score,
                numComments: el.data.num_comments,
                viewCount: el.data.view_count,
                ups: el.data.ups,
                downs: el.data.downs,
                selftext: el.data.selftext*/

function Post(props) {
    return (
        props.posts.map((el, ind) => 
        <li key={ind}>
            <div className="post">
                <h4>{el.title}</h4> 
                {/* <img src={example} alt='example image for a post' styles={styles.img}/> */}
                <p>{el.author}</p>
                <Comments comments={el.comments} numComments={el.numComments} />
                <p>{el.ups - el.downs}</p>
                <p>{el.timePosted}</p>
            </div>
        </li>)
    );
}

export default Post;