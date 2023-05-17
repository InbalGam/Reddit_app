import Post from './Post';
import { useSelector } from 'react-redux';
import { selectPosts } from './Store/postsSlice';

function Posts() {

    const posts = useSelector(selectPosts);
    console.log('in posts');

    return (
        <div className="posts_container">
            <ul>
            <Post posts={posts}/>
            </ul>
        </div>
    );
}

export default Posts;