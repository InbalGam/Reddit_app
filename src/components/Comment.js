import { timeAgo } from './Utilities/utilities';
import styles from './styles/Comment.css';


function Comment(props) {
    return (
            <li key={props.ind} className='commentList'>
                <div className='commentContainer'>
                    <p className='commentAuthor'>{props.el.author}</p> <p className='commentBody'>{props.el.body}</p> <p className='commentTime'>{timeAgo(props.el.timeCreated)}</p>
                </div>
            </li>
    );
};

export default Comment;