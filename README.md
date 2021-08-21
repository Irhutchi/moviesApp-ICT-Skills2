# Assignment - ReactJS app.

**Name: Ian Hutchinson**

## Overview 
The Movie Fan App is a responsive SPA for movie enthusiasts. [React](https://reactjs.org/) app that allows users to search, view and tag their favourite movies. The app enables users to securely sign-up and login using Firebase authentication. You can view detailed information of your favourite actors with their own dedicated page.
[Material UI](https://material-ui.com/getting-started/usage/) framework is utilised to style this app.
The data for the app is retrieved from an open web API, [The Movie DataBase (TMDb)](https://www.themoviedb.org/).

:movie_camera: Try out this app for yourself [here](https://tmdb-movie-app-38769.web.app/)

## Features

- Display a list of current movie releases. For each one, show its poster image, title, release date and viewer rating.
- Display more detailed information on a movie from the above list by clicking its 'More Info ..' button. The details include plot, genres, runtime, revenue, actors etc.
- Show extracts from written reviews for a movie.
- Show the full review text for a review.
- Add movies to your favourites list.
- Write a review for one of your favourites.
- Firebase Authentication, partially implemented
- Add movies to your playlist.
- Pagination component enables user to select a specific page
- User can watch movie trailer linked to Youtube 
- Display more detailed information on an actor in movie details by clicking the actor card. The details include, biography, date of birth, name, place of birth etc.
- App deployed using Firebase hosting services.

## Setup Requirements

To run this project yourself: <br>
[nodeJs](http://nodejs.org/download/) is required to run `npm`.
  1. Clone the repo: `https://github.com/Irhutchi/moviesApp-ICT-Skills2.git`
  2. `cd MovieFanApp`
  3. Install packagess: `npm install`
  4. Sign up for TMDB account [here](https://www.themoviedb.org/signup)
  5. Log in to your account. To get a key, follow this sequence:
     + Settings > API > Create > Click on Request an API > Click "Developer" > Fill in Details
  6. Save your key in the `.env` file.
  ```
  REACT_APP_TMDB_KEY=.... API key value ...
  FAST_REFRESH=false
  ```
  7. Sign up for a Firbase account [here](https://firebase.google.com/)
  8. Log into your Firebase account, follow these steps:
     + create new project > insert project name > click create project > Register app > add app nickname > click register app > add Firebase SDK > Copy your key details.
  9. Add your Firebase credentials to `.env` file.
  ```
  REACT_APP_FIREBASE_API_KEY=... API key value ...
  REACT_APP_FIREBASE_AUTH_DOMAIN=... etc ...
  REACT__APP_FIREBASE_DATABASE_URL=
  REACT_APP_FIREBASE_PROJECT_ID=
  REACT_APP_FIREBASE_STORAGE_BUCKET=
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
  REACT_APP_FIREBASE_APP_ID
  ```
  10. Type the command: `npm start` <br>
  11. Open your browser at: `http://localhost:3000`

The server responds with public.index.html, follwed by relevant assets (transpiled JS, CSS etc.)

## API Data Model

**Additional TMDB Endpoints**

**Get Video**: `https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US`
```json
[
  "video",
  {
    "id": "451048"
  }
]
fresh
Observers:
1
Last Updated:
22:18:15
Actions
Data Explorer
▶ Data 2 items
id: 451048
▶ results 7 items
▶ 0 10 items
iso_639_1: "en"
iso_3166_1: "US"
name: "Jungle Cruise Featurette - Big Adventure (2021) | Movieclips Trailers"
key: "aYSy8guUUV0"
site: "YouTube"
size: 1080
type: "Featurette"
official: false
published_at: "2021-07-07T17:51:17.000Z"
id: "60e83f52b76cbb00461e9440"
▶ 1 10 items
▶ 2 10 items
```

**Get Credits**: `https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US`
```json
[
  "credits",
  {
    "id": "451048"
  }
]

inactive
Observers:
0
Last Updated:
22:28:44
Actions
Data Explorer
▶ Data 3 items
id: 451048
▶ cast 67 items
▶ 0 12 items
adult: false
gender: 2
id: 18918
known_for_department: "Acting"
name: "Dwayne Johnson"
original_name: "Dwayne Johnson"
popularity: 29.497
profile_path: "/cgoy7t5Ve075naBPcewZrc08qGw.jpg"
cast_id: 0
character: "Frank Wolff"
credit_id: "58e79ac8925141351f0143c1"
order: 0
▶ 1 12 items
```
**Get Top Rated**: `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`
```json
[
  "topRatedMovies",
  {
    "page": 1
  }
]

fresh
Observers:
1
Last Updated:
22:30:55
Actions
Data Explorer
▶ Data 4 items
page: 1
▶ results 20 items
▶ 0 16 items
adult: false
backdrop_path: "/las0P4Dua54XrZ73VQmGUaH1z0U.jpg"
▶ genre_ids 4 items
id: 283566
original_language: "ja"
original_title: "シン・エヴァンゲリオン劇場版:||"
overview: "In the aftermath of the Fourth Impact, stranded without their Evangelions, Shinji, Asuka, and Rei search for refuge in the desolate red remains of Tokyo-3. But the danger to the world is far from over. A new impact is looming on the horizon—one that will prove to be the true end of Evangelion."
popularity: 933.071
poster_path: "/jDwZavHo99JtGsCyRzp4epeeBHx.jpg"
release_date: "2021-03-08"
title: "Evangelion: 3.0+1.0 Thrice Upon a Time"
video: false
vote_average: 8.8
vote_count: 203
favorite: false
playlist: false
▶ 1 16 items
```
**Get Actor**: `https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US`
```json
[
  "actor",
  {
    "id": "13242"
  }
]

fresh
Observers:
1
Last Updated:
22:28:53
Actions
Data Explorer
▶ Data 14 items
adult: false
▶ also_known_as 2 items
biography: "Paul Edward Valentine Giamatti (born June 6, 1967) is an American actor. Giamatti began his career as a supporting actor in several commercially successful and critically acclaimed films produced during the 1990s including Private Parts, The Truman Show, Saving Private Ryan, The Negotiator, and Man on the Moon, before earning lead roles in several projects in the 2000s including American Splendor, Sideways, Cinderella Man, The Illusionist, John Adams, Cold Souls, and Barney's Version. Description above from the Wikipedia article Paul Giamatti, licensed under CC-BY-SA, full list of contributors on Wikipedia."
birthday: "1967-06-06"
deathday: null
gender: 2
homepage: null
id: 13242
imdb_id: "nm0316079"
known_for_department: "Acting"
name: "Paul Giamatti"
place_of_birth: "New Haven, Connecticut, USA"
popularity: 11.223
profile_path: "/wbrVVJRr5TwhDZuvijBgOorzcAb.jpg"
```
### Component catalogue

**Storybook View** <br>
Boxes higlighted in yellow indicate additional stories since assignment one. <br>
![](https://github.com/Irhutchi/moviesApp-ICT-Skills2/blob/master/src/images/storybook.png)



### UI Design - Sample Views

**Home Page**
![](https://github.com/Irhutchi/moviesApp-ICT-Skills2/blob/master/src/images/home.png)
<br>
**Movies can be filtered by genre**
![](https://github.com/Irhutchi/moviesApp-ICT-Skills2/blob/master/src/images/FilterGenre.png)
<br>
**Movies Detail Page**
![](https://github.com/Irhutchi/moviesApp-ICT-Skills2/blob/master/src/images/movieDetails.png)
<br>
**Extract from all reviews**
![](https://github.com/Irhutchi/moviesApp-ICT-Skills2/blob/master/src/images/reviewExtract.png)
<br>
**Favourite Page**
![](https://github.com/Irhutchi/moviesApp-ICT-Skills2/blob/master/src/images/favouritePage.png)
<br>
**Actor Details**
![](https://github.com/Irhutchi/moviesApp-ICT-Skills2/blob/master/src/images/ActorBiography.pngv)

### Routing

+ GET / - displays authentication page.
+ GET /home - displays all movies.
+ GET /login - login to firebase backend
+ GET /signup - sign up for Firebase Authentication
+ GET /reviews/:id - displays a particular review.
+ GET /movies/favourites - displaying selected user favourites
+ GET /movies/upcoming - display upcoming movies
+ GET /movies/topRatedMovies - displays top rated movies
+ GET /movies/upcoming - display movies tagged movies from upcoming and top rated
+ GET /movies/:id - displays a particular movie
+ GET /movies/:id - displays a particular actor

## Independent learning 
**Scroll Feature** is intended to improve the user experience. I learned how the window interface fits into DOM document and in doing so, how to use window properties `pageYOffset` to scroll. From this you can determine the position in pixels from 0.0 indictating the top edge of the window.

**Pagination**  is implemented using [Material UI](https://material-ui.com/components/pagination/#pagination) component. To reduce the workload on the back-end server, data is cached locally. If the user returns to or refreshes a page, react-query library will force cache re-request data from TMDB API immediately. This reduces latency by reducing the number HTTP requests. 

**Display Movie Trailer**: The [GetVideos](https://developers.themoviedb.org/3/movies/get-movies-videos) endpoint was used to retrieve video json data. Each movie could have many trailers. A different method is used relative to others to retrieve the specific YouTube `key` value from the array. I learned about appending to repsonse query. The first key value from the first occurrence in the array is appended the trailer URL to render the correct trailer on YouTube.

**Firebase Authentication** is used to secure access credentials of users. Refer to reference [3] below for tutorial used as a guide. Although users can sign up successfully, implentation is only partially successful. IS with state managemnt causing issues.

Regarding UI styling decisions, I delved into the concept of Order and inheritence. Understanding the priority of cascading, this is used across the SPA but to mention the unique css used in login and signup components to provide unique css to [react-toastify](https://www.npmjs.com/package/react-toastify) notifications/ scaleloader spinner.


**Build and deploy application**: Firebase offers free hosting services for React SPA deployment. It was my first time going through the process of deploying an application to Firebase. To do so requires a npm package [firebase-tools](https://www.npmjs.com/package/firebase-tools). This installs Firebase CLI which is used to test, manage and deploy the application. The build pipeline is linked to the Github repo for this project via service account. Each time a new change is pushed/merged, CI/CD pipeline runs to integrate and deploy new changes. 

## References

 [1] Initial project structure by: [Diarmuid O'Connor](doconnor@wit.ie) <br>
 [2] [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction) <br>
 [3] [React Docs](https://reactjs.org/docs/getting-started.html) <br>
 [4] [Firebase Authentication](https://youtu.be/dJA3zqokc_c) <br>
 [5] [Firebase Deployment](https://youtu.be/1wZw7RvXPRU) <br>
 [6] [Pagination](https://material-ui.com/components/pagination/) <br>
 [7] [Display Movie trailer](https://material-ui.com/components/pagination/) <br>
 [8] [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset) 

## Author
- [@irhutchi](https://github.com/Irhutchi)
