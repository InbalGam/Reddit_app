import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, loadPosts } from './Store/postsSlice';
import { useEffect } from "react";

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
            {hasError ? 'Could not fetch posts, try again' : (isLoading ? 'Loading...' : <Post posts={posts}/>)}
            </ul>
        </div>
    );
}

export default Posts;