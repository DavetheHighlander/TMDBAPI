// Heter API Key Auth i TMDB
const API_KEY = "435a1409e7cfbec3639caf9e8abe08";
const API_KEYurl = "https://api.themoviedb.org/3/movie/100?language=en-US&api_key=${API_KEY}";

fetch(API_KEYurl).then((res) => res.json())
.then((json) => console.log(json))
.catch((err) => console.error("error:" + err))

// Heter Access Token Auth i TMDB
const BAERER_KEY = "iOiJIUzI1NiJ9.eyJhdWQiOiIwODQzNWExNDA5ZTdjZmJlYzM2MzljYWY5ZThhYmUwOCIsInN1YiI6IjY1Njc1NzRlYThiMmNhMDBlYTg5NDFjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DR1cd80pusLsFjUSchDqPqWwVTeXb1vmZJjSFb1ME4g";
const BAERER_KEYurl = 'https://api.themoviedb.org/3/movie/100?language=en-US';
const options = {
method: 'GET',
headers: {
accept: 'application/json',
Authorization: `Bearer ${BAERER_KEY}`
}
};
fetch(BAERER_KEYurl, options)
.then(res => res.json())
.then(json => console.log(json))
.catch(err => console.error('error:' + err))