import Post from './Post';
import { useSelector } from 'react-redux';
import { selectPosts } from './Store/postsSlice';

/// example for a hard-coded post-
/*{
    headline: 'string',
    image: img,
    userName: name,
    comments: ['string1', 'string2'],
    likes: 100,
    dislikes: 3,
    timePosted: '12hrsago'
}*/
///
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