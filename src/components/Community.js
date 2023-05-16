import { Link } from 'react-router-dom';

function Community() {
    return (
        <div className="community_container">
            <h3>Popular Communities</h3>
            {/*just as an example: */}
            <Link to="https://www.reddit.com/r/golf/">Golf</Link>
            <br/>
            <Link to="https://www.reddit.com/r/crossfit/">Crossfit</Link>
        </div>
    );
}

export default Community;