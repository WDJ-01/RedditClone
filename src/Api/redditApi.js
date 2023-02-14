const redditApi = 'https://www.reddit.com'

export const fetchRedditPost = async (subreddit) =>{ 
    const response = await fetch(`${redditApi}${subreddit}.json`);
    const jsonData = await response.json()

    return jsonData.data.children.map((post) => post.data)

};

export const fetchSubReddit = async () =>{
    const response = await fetch(`${redditApi}/subreddits.json`);
    const jsonData = await response.json()

    return jsonData.data.children.map((subreddit) => subreddit.data)

};

export const fetchRedditPostComments = async (permalink) =>{
    const response = await fetch(`${redditApi}${permalink}.json`);
    const jsonData = await response.json()

    return jsonData[1].data.children.map((subreddit) => subreddit.data)

};