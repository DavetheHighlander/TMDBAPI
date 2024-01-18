console.log("david")
// Heter API Key Auth i TMDB
var API_KEY = "ebae5f0bd80177ceba5ad2e57d3fd362";
var API_KEYurl = `${baseUrl}movie/100?language=en-US&api_key=${API_KEY}`;

fetch(API_KEYurl).then((res) => res.json())
.then((json) => console.log(json))
.catch((err) => console.error("error:" + err))
var baseUrl = "https://api.themoviedb.org/3/";

// Heter Access Token Auth i TMDB
var BAERER_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmFlNWYwYmQ4MDE3N2NlYmE1YWQyZTU3ZDNmZDM2MiIsInN1YiI6IjY1YTA1N2I5YWUzNjY4MDEyNjk0YmZlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oS89ngJTHPclbQVv6ipip_e2XbKerrqgiwJNQDz54aU";
var BAERER_KEYurl = `${baseUrl}movie/100?language=en-US`;
var options = {
method: 'GET',
headers: {
accept: 'application/json',
Authorization: `Bearer ${BAERER_KEY}`
}
};
fetch(BAERER_KEYurl, options)
.then(res => res.json())
.then(json => console.log(json))
.catch(err => console.error('error:' + err));
