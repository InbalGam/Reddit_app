async function searchReddit(subReddit, type) {
    const lower = subReddit.toLowerCase();
    let url;
    if (type === 'search') {
        url = `https://www.reddit.com/search.json?q=${lower}`;
    } else {
        url = `https://www.reddit.com/r/${lower}/.json`;
    }
    const response = await fetch(url, {method: 'GET'});
    const jsonData = await response.json();
    return jsonData;
};


async function getComments(permalink) {
    const url = `https://www.reddit.com${permalink}.json`;
    const response = await fetch(url, {method: 'GET'});
    const jsonData = await response.json();
    return jsonData;
};



async function getPopular() {
    const url = `https://www.reddit.com/subreddits/popular.json`;
    const response = await fetch(url, {method: 'GET'});
    const jsonData = await response.json();
    return jsonData;
};


async function loadMore(subReddit, after, type) {
    const lower = subReddit.toLowerCase();
    let url;
    if (type === 'search') {
        url = `https://www.reddit.com/search.json?q=${lower}&after=${after}`;
    } else {
        url = `https://www.reddit.com/r/${lower}/.json?after=${after}`;
    }
    const response = await fetch(url, {method: 'GET'});
    const jsonData = await response.json();
    return jsonData;
};


export { searchReddit, getComments, getPopular, loadMore };