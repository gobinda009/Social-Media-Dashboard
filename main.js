var toggleSwitch = document.querySelector("#toggleSwitch");

function themeSwitcher() {
    if (toggleSwitch.checked) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        // Add Light Theme in LocalStorage
        localStorage.setItem("theme", "light")
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.removeItem("theme");
    }
}

toggleSwitch.addEventListener("click", function () {
    themeSwitcher();
})

// Get Theme From Local Storage while Toggle Switch is Clicked
function latestTheme() {
    if (localStorage.getItem("theme")) {
        document.body.classList.add('light');
        toggleSwitch.checked = true;
    }
}
latestTheme();


fetch("https://graph.facebook.com/v18.0/106193747757437/insights?access_token=EAAEZBYm2r2aMBOZB9dGT7ZCYzP8waQm0KHenfaanPFje1GODWVxjoJ4hlwX60xNmzZB7Q1lkxnrzpAl3ZCPGaVubYqc1R38SVAaOMW67F1h5pqy29sLsp44vw2Y8kzvjZBHIXZBMgZBTetVXIaNl9ywpxjBCVEm8VRIu0nQtf192E1qKOVk0RmoIAdUFnmGHdc8MZB0lV2JaMe1wYhkkZD&pretty=0&metric=page_fans&period=day&since=1703059200&until=1703232000")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayLikes(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayLikes(data) {
    const cocktail = data.data[0];
    const cocktailDiv = document.getElementById("cocktail"); 

    const cocktailName = cocktail.values[0].value;
  const heading = document.createElement("h1");
  heading.innerHTML = cocktailName;
  cocktailDiv.appendChild(heading);
  }
  
  fetch("https://graph.facebook.com/v18.0/106193747757437/insights?access_token=EAAEZBYm2r2aMBOZB9dGT7ZCYzP8waQm0KHenfaanPFje1GODWVxjoJ4hlwX60xNmzZB7Q1lkxnrzpAl3ZCPGaVubYqc1R38SVAaOMW67F1h5pqy29sLsp44vw2Y8kzvjZBHIXZBMgZBTetVXIaNl9ywpxjBCVEm8VRIu0nQtf192E1qKOVk0RmoIAdUFnmGHdc8MZB0lV2JaMe1wYhkkZD&pretty=0&metric=page_engaged_users&since=1703059200&until=1703232000")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    displayViews(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayViews(data) {
    const view = data.data[0];
    const cocktailDiv = document.getElementById("view"); 

    const cocktailName = view.values[0].value;
  const heading = document.createElement("h3");
  heading.innerHTML = cocktailName;
  cocktailDiv.appendChild(heading);
  }
  
  fetch("https://graph.facebook.com/v18.0/106193747757437/insights?access_token=EAAEZBYm2r2aMBOZB9dGT7ZCYzP8waQm0KHenfaanPFje1GODWVxjoJ4hlwX60xNmzZB7Q1lkxnrzpAl3ZCPGaVubYqc1R38SVAaOMW67F1h5pqy29sLsp44vw2Y8kzvjZBHIXZBMgZBTetVXIaNl9ywpxjBCVEm8VRIu0nQtf192E1qKOVk0RmoIAdUFnmGHdc8MZB0lV2JaMe1wYhkkZD&pretty=0&metric=page_fan_adds&since=1703059200&until=1703232000")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    displayLikesToday(data);
    displayLikeToday(data);

  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayLikesToday(data) {
    const view = data.data[0];
    const TodayLikeDiv = document.getElementById("todaylike"); 

    const Likes = view.values[0].value;
  const heading = document.createElement("h3");
  heading.innerHTML = Likes;
  TodayLikeDiv.appendChild(heading);
  }

  function displayLikeToday(data) {
    const view = data.data[0];
    const TodayLikeDiv = document.getElementById("todaylike1"); 

    const Likes = view.values[0].value;
  const heading = document.createElement("h3");
  heading.innerHTML = Likes;
  TodayLikeDiv.appendChild(heading);
  }

  fetch("https://graph.facebook.com/v18.0/17841434690997156?fields=followers_count&access_token=EAAFf7LzzFeMBO0PxxAZA5N9xVIR7BNoR4oZCXfeseIkM1QfdKgyiEZCXRGVWrc547pOvT4mghVKhMbuG2Ba2ZAsFXPW5V2P1OZAcHFw9kdZARqTWUIqt4jxQjGsZAm5bI6FZAUzdwWkPBkHngYOeVZAN72IkS8UeBK9qApZArKxvEVjEzeKu2uhQMH5OUmw32YdcoaJIoZC4SCo")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    displayInstaFollowers(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayInstaFollowers(data) {
    const instaFollower = data.followers_count;
    const followerDiv = document.getElementById("totalFollowers"); 

  const heading = document.createElement("h1");
  heading.innerHTML = instaFollower;
  followerDiv.appendChild(heading);
  }


  fetch("https://graph.facebook.com/v18.0/17841434690997156/insights?access_token=EAAFf7LzzFeMBO0PxxAZA5N9xVIR7BNoR4oZCXfeseIkM1QfdKgyiEZCXRGVWrc547pOvT4mghVKhMbuG2Ba2ZAsFXPW5V2P1OZAcHFw9kdZARqTWUIqt4jxQjGsZAm5bI6FZAUzdwWkPBkHngYOeVZAN72IkS8UeBK9qApZArKxvEVjEzeKu2uhQMH5OUmw32YdcoaJIoZC4SCo&pretty=0&metric=follower_count&period=day&since=1703232027&until=1703404827")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    displayInstaDayFollowers(data);
    displayDayCount(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayInstaDayFollowers(data) {
    const instaFollowers = data.data[0];
    const followerDiv = document.getElementById("todayFollower"); 

    const followers = instaFollowers.values[0].value;
  const heading = document.createElement("h3");
  heading.innerHTML = followers;
  followerDiv.appendChild(heading);
  }

  function displayDayCount(data) {
    const instaFollowers = data.data[0];
    const followerDiv = document.getElementById("todaysCount"); 

    const followers = instaFollowers.values[0].value;
  const heading = document.createElement("h3");
  heading.innerHTML = followers;
  followerDiv.appendChild(heading);
  }



  fetch("https://graph.facebook.com/v18.0/17841434690997156/insights?access_token=EAAFf7LzzFeMBO0PxxAZA5N9xVIR7BNoR4oZCXfeseIkM1QfdKgyiEZCXRGVWrc547pOvT4mghVKhMbuG2Ba2ZAsFXPW5V2P1OZAcHFw9kdZARqTWUIqt4jxQjGsZAm5bI6FZAUzdwWkPBkHngYOeVZAN72IkS8UeBK9qApZArKxvEVjEzeKu2uhQMH5OUmw32YdcoaJIoZC4SCo&pretty=0&metric=impressions&period=day&since=1703233471&until=1703406271")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    displayViewsInsta(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayViewsInsta(data) {
    const instaFollowers = data.data[0];
    const followerDiv = document.getElementById("pageViewDay"); 

    const followers = instaFollowers.values[0].value;
  const heading = document.createElement("h3");
  heading.innerHTML = followers;
  followerDiv.appendChild(heading);
  }

  

  fetch("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCU5_9CZHpxhJh2ipfVqbRYA&key=AIzaSyDWMtUvU_PQRpkTNHvhttu7iijONv9Gn1E")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displaySubscriber(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displaySubscriber(data) {
    const subcriber = data.items[0];
    const subcriberDiv = document.getElementById("subscriber_count"); 

    const subscribers = subcriber.statistics.subscriberCount;
  const heading = document.createElement("h1");
  heading.innerHTML = subscribers;
  subcriberDiv.appendChild(heading);
  }

  fetch("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCU5_9CZHpxhJh2ipfVqbRYA&key=AIzaSyDWMtUvU_PQRpkTNHvhttu7iijONv9Gn1E")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayViewsy(data);
    displayTotalVideos(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayViewsy(data) {
    const subcriber = data.items[0];
    const subcriberDiv = document.getElementById("totalViews"); 

    const subscribers = subcriber.statistics.viewCount;
  const heading = document.createElement("h3");
  heading.innerHTML = subscribers;
  subcriberDiv.appendChild(heading);
  }

  function displayTotalVideos(data) {
    const subcriber = data.items[0];
    const subcriberDiv = document.getElementById("youtubeVideos"); 

    const subscribers = subcriber.statistics.videoCount;
  const heading = document.createElement("h3");
  heading.innerHTML = subscribers;
  subcriberDiv.appendChild(heading);
  }


