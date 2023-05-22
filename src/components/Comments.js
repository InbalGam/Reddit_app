import { useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import Comment from './Comment';

import styles from './styles/Comments.css';

function Comments(props) {
    


    return (
        <div className="allCommentsContainer">
            {props.showingComments === false ? '' : (props.isLoading ? <ClipLoader color={'#3c0c21'} size={80} /> : <ul>{props.comments.map((el, ind) => <Comment el={el} ind={ind}/>)}</ul> )}
        </div>
    );
}

export default Comments;