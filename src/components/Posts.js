import Post from './Post';
import { useSelector } from 'react-redux';
import { selectPosts } from './Store/postsSlice';

function Posts() {

    const posts = useSelector(selectPosts);
    const { hasError, isLoading } = useSelector((state) => state.posts);
    console.log('in posts');

    return (
        <div className="posts_container">
            <ul>
            {hasError ? 'Could not fetch posts, try again' : (isLoading ? 'Loading...' : <Post posts={posts}/>)}
            </ul>
        </div>
    );
}

export default Posts;