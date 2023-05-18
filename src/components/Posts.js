import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, loadMorePosts} from './Store/postsSlice';
import { useEffect } from "react";
import ClipLoader from 'react-spinners/ClipLoader';

function Posts() {
    const posts = useSelector(selectPosts);
    const { hasError, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();


      const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
          return;
        }
        dispatch(loadMorePosts());
      };
      
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [isLoading]);

    return (
        <div className="posts_container">
            <ul>
            {hasError ? 'Could not fetch posts, try again' : (isLoading ? <ClipLoader color={'#3c0c21'} size={150} /> : posts.map((el, ind) => <Post el={el} ind={ind}/>))}
            </ul>
        </div>
    );
}

export default Posts;