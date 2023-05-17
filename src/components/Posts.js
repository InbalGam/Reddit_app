import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, loadPosts } from './Store/postsSlice';
import { useEffect } from "react";
import ClipLoader from 'react-spinners/ClipLoader';
import InfiniteScroll from 'react-infinite-scroller';

function Posts() {

    const posts = useSelector(selectPosts);
    const { hasError, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadPosts('home'));
    }, [dispatch]);

    function loadFunc() {
        if(!isLoading) {
            dispatch(loadPosts('home'));
        }
      };

    return (
        <div className="posts_container">
            <ul>
            
            <InfiniteScroll
                    pageStart={0}
                    loadMore={loadFunc}
                    hasMore={true || false}
                    loader={<div className="loader" key={0}>Loading ...</div>}>
                    {hasError ? 'Could not fetch posts, try again' : (isLoading ? <ClipLoader color={'#3c0c21'} size={150} /> : <Post posts={posts}/>)} {/* <-- This is the content you want to load */}
            </InfiniteScroll>
            </ul>
        </div>
    );
}

export default Posts;