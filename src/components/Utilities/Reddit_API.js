async function searchReddit(subReddit) {
    const lower = subReddit.toLowerCase();
    const url = `https://www.reddit.com/search.json?q=${lower}`;
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


async function loadMore(subReddit, after) {
    const lower = subReddit.toLowerCase();
    const url = `https://www.reddit.com/search.json?q=${lower}&after=${after}`;
    const response = await fetch(url, {method: 'GET'});
    const jsonData = await response.json();
    return jsonData;
};


export { searchReddit, getComments, getPopular, loadMore };