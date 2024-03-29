import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { loadPosts } from './Store/postsSlice';
import { getPopular } from './Utilities/Reddit_API';
import { useParams } from "react-router-dom";
import styles from '../components/styles/Community.css';

function Community() {
    const [community, setCommunity] = useState('');
    const dispatch = useDispatch();
    const [populars, setPopulars] = useState([]);
    const { communityName = 'home' } = useParams()

    async function getPopularCommunities() {
        const results = await getPopular();
        const popular = results.data.children.map(el => {
            return {
                name: el.data.display_name,
                url: el.data.url,
                img: el.data.header_img
            }
        });
        setPopulars(popular);
    };


    useEffect(() => {
        getPopularCommunities();
      }, []);


    useEffect(() => {
        dispatch(loadPosts({term:communityName, type:'community'}));
      }, [communityName]);


    return (
        <div className="community_container">
            <h3>Popular Communities</h3>
            <ul className='listPopular'>{populars.map((el, ind) => <li key={ind} className={communityName === el.name ? 'communityChosen' : ''}>
                <Link to={`/${el.name}`} className='popularLink'><img src={el.img}/><p className='popularName'>{el.name}</p></Link></li>)}</ul>
        </div>
    );
}

export default Community;