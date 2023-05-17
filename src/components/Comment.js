import { timeAgo } from './Utilities/utilities';


function Comment(props) {
    return (
        <li key={props.ind}><p>{props.el.author} {props.el.body} {timeAgo(props.el.timeCreated)}</p></li>
    );
};

export default Comment;