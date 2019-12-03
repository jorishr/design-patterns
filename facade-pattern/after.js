// fetch the users and there posts from the API, log in the console
function getUsers() {
    return doFetch('https://jsonplaceholder.typicode.com/users');
};

function getUserPosts(userId) {
    return doFetch(`https://jsonplaceholder.typicode.com/posts`, 
        {userId: userId}
    );
};
  
getUsers().then(users => {
    users.forEach(user => {
      getUserPosts(user.id).then(posts => {
        console.log(user.name)
        console.log(posts.length)
      })
    })
});
/* Constructing the queryString:
    - get the entries of the params object, for each user you get an an array.
    - the first value: "userId", the second value the id number of the user
    - the queryString we need: 'userId=<userNumberId>'
    - map over the arrays and return the queryString
    - all the different user queryString need to be joined together into one
    string again and with the & as seperator. Thus you get:
        `https://jsonplaceholder.typicode.com/posts?userId=1&userId=2&userId=3...etc`
*/
function doFetch(url, params = {}) {
    //console.log(Object.entries(params));
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&')
    return fetch(`${url}?${queryString}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(res => res.json());
};

// can easily be replace by the AXIOS library which has a cleaner syntax and 
// can handle the params without the need of building the queryString manually.

/* function getFetch(url, params = {}) {
    return axios({
      url: url,
      method: "GET",
      params: params
    }).then(res => res.data);   // instead of res.json
} */