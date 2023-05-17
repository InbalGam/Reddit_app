async function searchReddit(subreddit, listing, limit, timeframe) {
    const url = `https://www.reddit.com/r/${subreddit}/${listing}.json?limit=${limit}&t=${timeframe}`;
    const response = await fetch(url, {method: 'GET',
                                        headers: {'User-agent': 'yourbot'}});
    const jsonData = await response.json();
    return jsonData;
};

export { searchReddit };








// import requests
  
// subreddit = 'python'
// limit = 100
// timeframe = 'month' #hour, day, week, month, year, all
// listing = 'top' # controversial, best, hot, new, random, rising, top
  
// def get_reddit(subreddit,listing,limit,timeframe):
//     try:
//         base_url = f'https://www.reddit.com/r/{subreddit}/{listing}.json?limit={limit}&t={timeframe}'
//         request = requests.get(base_url, headers = {'User-agent': 'yourbot'})
//     except:
//         print('An Error Occured')
//     return request.json()
  
// r = get_reddit(subreddit,listing,limit,timeframe)





// async function searchSpotify(query, type, token) {
//     const url = `https://api.spotify.com/v1/search?q=${query}&type=${type}`;
//     const response = await fetch(url, {method: 'GET',
//                                        headers: {'Authorization': `Bearer ${token}`}});                                   
//     const jsonData = await response.json();
//     return jsonData;
// };