import Post from './Post';

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
    const posts = [{
        headline: 'headline example 1',
        image: 'img',
        userName: 'Inbal',
        comments: ['string1', 'string2'],
        likes: 100,
        dislikes: 3,
        timePosted: '12 hrs ago'
    },
    {
        headline: 'headline example 2',
        image: 'img',
        userName: 'Nir',
        comments: ['string1', 'string2', 'string3', 'string4'],
        likes: 115,
        dislikes: 3,
        timePosted: '10 hrs ago'
    }];

    return (
        <div className="posts_container">
            <ul>
            <Post posts={posts}/>
            </ul>
        </div>
    );
}

export default Posts;