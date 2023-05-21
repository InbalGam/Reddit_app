import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, loadMorePosts, isMoreLoading } from './Store/postsSlice';
import { useEffect } from "react";
import ClipLoader from 'react-spinners/ClipLoader';
import styles from './styles/Posts.css';

function Posts() {
    const posts = useSelector(selectPosts);
    const { hasError, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const { hasMoreError, isMoreLoading } = useSelector((state) => state.posts);


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
                {hasError ? 'Could not fetch posts, try again' : (isLoading ? <ClipLoader color={'#3c0c21'} size={150} /> : posts.map((el, ind) => <Post el={el} ind={ind} />))}
                {hasMoreError ? 'Could not fetch posts, try again' : (isMoreLoading ? <ClipLoader color={'#3c0c21'} size={150} /> : '' )}
            </ul>
        </div>
    );
}

export default Posts;