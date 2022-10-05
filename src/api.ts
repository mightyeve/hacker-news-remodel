// API integration link
const baseUrl = "https://hacker-news.firebaseio.com/v0";

// Types
interface postInfo{
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  
}

interface commentInfo{
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

/*
  Fetch top posts
  Return format: [ 9129911, 9129199, 9127761, 9128141, 9128264, 9127792, 9129248, 9127092, 9128367, ..., 9038733 ]
*/
async function getTopPosts() {
  let posts: number[] = [];
  const response = await fetch(baseUrl + "/topstories.json");
  posts = await response.json();
  return posts;
}

// Function to call for topPosts
export function topPosts(): postInfo[] {
  const items: postInfo[] = [];

  // Call getTopPosts() to get number array of ids from API
  getTopPosts().then((posts) => {
    // Call addPost() to get postInfo array for each ID
    addPost(items, posts);
  });

  return items;
}

/*
  Fetch new posts
  Return format: [ 9129911, 9129199, 9127761, 9128141, 9128264, 9127792, 9129248, 9127092, 9128367, ..., 9038733 ]
*/
async function getNewPosts() {
  let posts: number[] = [];
  const response = await fetch(baseUrl + "/newstories.json");
  posts = await response.json();
  return posts;
}

// Function to call for newPosts
export function newPosts(): postInfo[]{
  const items: postInfo[] = [];
  
  // Call getNewPosts() to get number array of ids from API
  getNewPosts().then((posts) => {
    // Call addPost() to get postInfo array for each ID
    addPost(items, posts);
  });

  return items;
}



/*
  Fetch ask posts
  Return format: [ 9129911, 9129199, 9127761, 9128141, 9128264, 9127792, 9129248, 9127092, 9128367, ..., 9038733 ]
*/
async function getAskPosts() {
  let posts: number[] = [];
  const response = await fetch(baseUrl + "/askstories.json");
  posts = await response.json();
  return posts;
}

// Function to call for askPosts
export function askPosts(): postInfo[] {
  const items: postInfo[] = [];

  // Call getAskPosts() to get number array of ids from API
  getAskPosts().then((posts) => {
    // Call addPost() to get postInfo array for each ID
    addPost(items, posts);
  });

  return items;
}

/*
  Fetch show posts
  Return format: [ 9129911, 9129199, 9127761, 9128141, 9128264, 9127792, 9129248, 9127092, 9128367, ..., 9038733 ]
*/
async function getShowPosts() {
  let posts: number[] = [];
  const response = await fetch(baseUrl + "/showstories.json");
  posts = await response.json();
  return posts;
}

// Function to call for showPosts
export function showPosts(): postInfo[] {
  const items: postInfo[] = [];

  // Call getShowPosts() to get number array of ids from API
  getShowPosts().then((posts) => {
    // Call addPost() to get postInfo array for each ID
    addPost(items, posts);
  });

  return items;
}

/*
  Fetch job posts
  Return format: [ 9129911, 9129199, 9127761, 9128141, 9128264, 9127792, 9129248, 9127092, 9128367, ..., 9038733 ]
*/
async function getJobPosts() {
  let posts: number[] = [];
  const response = await fetch(baseUrl + "/jobstories.json");
  posts = await response.json();
  return posts;
}

// Function to call for jobPosts
export function jobPosts(): postInfo[] {
  const items: postInfo[] = [];

  // Call getJobPosts() to get number array of ids from API
  getJobPosts().then((posts) => {
    // Call addPost() to get postInfo array for each ID
    addPost(items, posts);
  });

  return items;
}


// Function to call for past posts
// Manually find past posts based on the "time" field of topPosts
export function pastPosts(): postInfo[] {
  const items: postInfo[] = [];

  // Call getTopPosts() to get number array of ids from API
  getTopPosts().then((posts) => {
    // Call addPostByDate to get posts from today 
    // Only choosing posts that were posted hours, minutes, or seconds ago
    addPostByDate(items, posts);
  });

  return items;
}


// Function to call for topComments
// Manually find first comment in each of the Top Posts
export  function topComments(): commentInfo[] {
  let ids: number[] = [];
  const comments: number[] = [];
  const items: commentInfo[] = [];
  
  // Call getTopPosts() to get number array of ids from API
  getTopPosts().then((posts) => {
    // limit the number of top posts searched through to 60
    ids = posts.slice(0, 60);

    // Call addTopComments() to fetch each post's first comment 
    addTopComments(ids, comments).then(async (comment) => {

      // Call waitFor() to wait for array to populate
      await waitFor(3000)

      // Add commentInfo items into the array
      comment.forEach(async (id) => {
        const response = await fetch(baseUrl + "/item/" + `${id}.json`);
        const data = await response.json();
        data.time = getTimeSince(data.time);
        data.parent = await getPostParent(data.parent);
        items.push(data);
      });
       
    });

  });
  
  return items;
}

// Timeout function
function waitFor(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Fetches the first comment in a post based on that post's ID
async function addTopComments(ids: number[], comments: number[]) {

  // given an array of ids, grab the individual post by ID, and from that post
  // get the first comment
  ids.forEach(async (id) => {
    // Call getItem() to get the post by ID
    getItem(id).then((post) => {
      // if the post has a comment, add the first comment
      if(post.kids){
        comments.push(post.kids[0]);
      }
    });
  });
  return comments;
}


/*
  Populate items array with postInfo data using list of post id numbers
  Format of postInfo: 
    {
      "by" : "dhouston",
      "descendants" : 71,
      "id" : 8863,
      "kids" : [ 8952, 9224, 8917, 8884, ..., 8980, 8934, 8876 ],
      "score" : 111,
      "time" : 1175714200,
      "title" : "My YC app: Dropbox - Throw away your USB drive",
      "type" : "story",
      "url" : "http://www.getdropbox.com/u/2/screencast.html"
    }
*/
async function addPost(items: postInfo[], posts: number[]) {

  // For each id number, fetch the post information from the api
  posts.forEach(async (id) => {
    const response = await fetch(baseUrl + "/item/" + `${id}.json`);
    const data = await response.json();
    data.time = getTimeSince(data.time);
    

    // add to the array
    items.push(data);
  });
}

/*
  Populate items array with postInfo data FROM TODAY using list of post id numbers
  Format of postInfo: 
    {
      "by" : "dhouston",
      "descendants" : 71,
      "id" : 8863,
      "kids" : [ 8952, 9224, 8917, 8884, ..., 8980, 8934, 8876 ],
      "score" : 111,
      "time" : 1175714200,
      "title" : "My YC app: Dropbox - Throw away your USB drive",
      "type" : "story",
      "url" : "http://www.getdropbox.com/u/2/screencast.html"
    }
*/
async function addPostByDate(items: postInfo[], posts: number[]) {

  // For each id number, fetch the post information from the api  
  posts.forEach(async (id) => {
    const response = await fetch(baseUrl + "/item/" + `${id}.json`);
    const data = await response.json();

    // Call the getTimeSince function to calculate elapsed time 
    data.time = getTimeSince(data.time);

    // Only add posts that were from TODAY
    if(data.time.includes("seconds") || data.time.includes("minute") || data.time.includes("hour")){
      items.push(data);
    }
    
  });
}


// fetch an single post based on id 
async function getItem(id: number) {
  const response = await fetch(baseUrl + "/item/" + `${id}.json`);
  const data = await response.json();
  return data;
}

// Function to call for postComments
// Fetch all comments on a post based on the ID
export async function getPostComment(id: number): Promise<any[]> {
  const comments: commentInfo[] = [];

  // Call getItem() to grab a single post
  getItem(id).then((post) => {

    // Call addComment to get the post's comments
    addComment(comments, post);
  });
  return comments;
}

// Function to call for getting a comment's parent title
async function getPostParent(id: number) {
  const response = await fetch(baseUrl + "/item/" + `${id}.json`);
  const posts = await response.json();
  return posts.title;
}

// Fetch comments for a post 
async function addComment(comments: commentInfo[], post: commentInfo) {
  post.kids.forEach(async (comment) => {
    const response = await fetch(baseUrl + "/item/" + `${comment}.json`);
    const data = await response.json();
    comments.push(data);
  });
}


// Convert "time" field of postsInfo from UNIX time
function getTimeSince(timePostCreated: number) {

  // convert unix timestamp to JavaScript date object
  // multiply by 1000 to convert from seconds to milliseconds
  const datePostCreated = new Date(timePostCreated * 1000);

  // calculate time elapsed
  const currentDate = new Date();

  const secondsElapsed = Math.floor((currentDate.valueOf() - datePostCreated.valueOf()) / 1000);

  // seconds ago
  if (secondsElapsed < 60) {
    return Math.floor(secondsElapsed) + " seconds ago";
  }

  // secondsInYear = 31536000;
  let timeElapsed = secondsElapsed / 31536000;

  // years
  if (timeElapsed > 1) {
    const years = Math.floor(timeElapsed) == 1 ? " year" : " years";
    return Math.floor(timeElapsed) + years + " ago";
  }

  // secondsInMonth = 2592000;
  timeElapsed = secondsElapsed / 2592000;
  if (timeElapsed > 1) {
    const months = Math.floor(timeElapsed) == 1 ? " month" : " months";
    return Math.floor(timeElapsed) + months + " ago";
  }

  // secondsInDay = 86400;
  timeElapsed = secondsElapsed / 86400;
  if (timeElapsed > 1) {
    const days = Math.floor(timeElapsed) == 1 ? " day" : " days";
    return Math.floor(timeElapsed) + days + " ago";
  }

  // secondsInHour = 3600;
  timeElapsed = secondsElapsed / 3600;
  if (timeElapsed > 1) {
    const hours = Math.floor(timeElapsed) == 1 ? " hour" : " hours";
    return Math.floor(timeElapsed) + hours + " ago";
  }

  // secondsInMin = 60;
  timeElapsed = secondsElapsed / 60;
  if (timeElapsed > 1) {
    const minutes = Math.floor(timeElapsed) == 1 ? " minute" : " minutes";
    return Math.floor(timeElapsed) + minutes + " ago";
  }
}

