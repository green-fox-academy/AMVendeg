'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!


// kettőspont a https után
// végét cserélni a bots-t odds-ra

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

url = url.replace("https", "https:");
url = url.replace("bots", "odds");

console.log(url);
