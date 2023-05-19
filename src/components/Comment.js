import { timeAgo } from './Utilities/utilities';


function Comment(props) {
    return (
            <li key={props.ind}><p className='commentAuthor'>{props.el.author}</p> <p className='commentBody'>{props.el.body}</p> <p className='commentTime'>{timeAgo(props.el.timeCreated)}</p> </li>
    );
};

export default Comment;