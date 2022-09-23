// API integration
const baseUrl = "https://hacker-news.firebaseio.com/v0";

// fetch top posts (list of IDs)
async function getTopPosts() {
  let posts = [];
  const response = await fetch(baseUrl + "/topstories.json");
  posts = await response.json();
  return posts;
}

export function topPosts(): any[] {
  const items = [];
  // Add top posts based on ID
  getTopPosts().then((posts) => {
    addPost(items, posts);
  });
  return items;
}

// fetch new posts (list of IDs)
async function getNewPosts() {
  let posts = [];
  const response = await fetch(baseUrl + "/newstories.json");
  posts = await response.json();
  return posts;
}

export function newPosts(): any[] {
  const items = [];
  // Add new posts based on ID
  getNewPosts().then((posts) => {
    addPost(items, posts);
  });
  console.log("items");
  console.log(items);
  return items;
}

// grab posts based on ID (all the posts with details)
async function addPost(items, posts) {
  posts.forEach(async (id) => {
    const response = await fetch(baseUrl + "/item/" + `${id}.json`);
    const data = await response.json();
    data.time = getTimeSince(data.time);
    items.push(data);
  });
}

// fetch an single post based on id when it is clicked
async function getItem(id) {
  const response = await fetch(baseUrl + "/item/" + `${id}.json`);
  const data = await response.json();
  return data;
}

// get all comments of a post based on id
export async function getPostComment(id): Promise<any[]> {
  const comments = [];
  getItem(id).then((post) => {
    addComment(comments, post);
  });
  return comments;
}

// get comments of the post
async function addComment(comments, post) {
  post.kids.forEach(async (comment) => {
    const response = await fetch(baseUrl + "/item/" + `${comment}.json`);
    const data = await response.json();
    comments.push(data);
  });
}

function getTimeSince(timePostCreated) {
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

//topPosts();
//getPostComment(32836500);
