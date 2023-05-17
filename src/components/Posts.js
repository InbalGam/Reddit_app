import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, loadPosts } from './Store/postsSlice';
import { useEffect } from "react";
import ClipLoader from 'react-spinners/ClipLoader';

function Posts() {

    const posts = useSelector(selectPosts);
    const { hasError, isLoading } = useSelector((state) => state.posts);
    //console.log('in posts');
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadPosts('home'));
    }, [dispatch]);

    return (
        <div className="posts_container">
            <ul>
            {hasError ? 'Could not fetch posts, try again' : (isLoading ? <ClipLoader color={'#3c0c21'} size={150} /> : <Post posts={posts}/>)}
            </ul>
        </div>
    );
}

export default Posts;