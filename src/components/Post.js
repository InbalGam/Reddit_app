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
                    selftext: el.data.selftext,
                    timeCreated: el.data.created_utc,
                    comments: ['string1', 'string2'],
                    thumbnail: el.data.thumbnail*/

function Post(props) {
    const timeAgo = (date) => {
        const seconds = Math.floor((new Date() - date) / 1000);
      
        let interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
          return interval + ' years ago';
        }
      
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
          return interval + ' months ago';
        }
      
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
          return interval + ' days ago';
        }
      
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
          return interval + ' hours ago';
        }
      
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
          return interval + ' minutes ago';
        }
      
        if(seconds < 10) return 'just now';
      
        return Math.floor(seconds) + ' seconds ago';
      };

      
    return (
        props.posts.map((el, ind) => 
        <li key={ind}>
            <div className="post">
                <h4>{el.title}</h4> 
                <img src={el.thumbnail} alt='post image' styles={styles.img}/>
                <p>{el.author}</p>
                <Comments comments={el.comments} numComments={el.numComments} />
                <p>{el.ups - el.downs}</p>
                <p>{timeAgo(el.timeCreated)}</p>
            </div>
        </li>)
    );
}

export default Post;