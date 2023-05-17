async function searchReddit(subReddit) {
    const lower = subReddit.toLowerCase();
    const url = `https://www.reddit.com/search.json?q=${lower}`;
    const response = await fetch(url, {method: 'GET',
                                        headers: {'User-agent': 'yourbot'}});
    const jsonData = await response.json();
    return jsonData;
};

export { searchReddit };

