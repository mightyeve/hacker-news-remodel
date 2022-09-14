import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// API integration
const baseUrl = "https://hacker-news.firebaseio.com/v0";

// fetch list of stories
async function getTopPosts() {
  let stories = [];
  const response = await fetch(baseUrl + "/topstories.json");
  stories = await response.json();
  return stories;
}

// fetch items based on ids in getTopStories()
// returns items[]
async function storiesWithItems() {
  const items = [];
  getTopPosts().then((stories) => {
    stories.forEach((id) => {
      fetch(baseUrl + "/item/" + `${id}.json`)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          items.push(data);
        });
    });
  });
  console.log(items);
}

// fetch an single item based on idd
async function getItem(id) {
  const response = await fetch(baseUrl + "/item/" + `${id}.json`);
  const data = await response.json();
  return data;
}

// get comment of a single item based on id
async function getStoryComment(id) {
  const comments = [];
  getItem(id).then((story) => {
    story.kids.forEach((comment) => {
      fetch(baseUrl + "/item/" + `${comment}.json`)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          comments.push(data);
        });
    });
  });
  console.log(comments);
}

storiesWithItems();
getStoryComment(32836500);
