[DEMO LINK](https://monumental-peony-6ece1b.netlify.app/)

This repository contains a Single Page Application (SPA) built with React,
using the Material-UI library for styling. The project uses the open API 
from https://spaceflightnewsapi.net/ to retrieve article names and descriptions.

The application has two main pages: the home page and the article page and Error page to which user will be
redirected in case of data loading errors or incorrect url address. 
The home page displays a list of cards with article titles and descriptions (limited to 100 characters) 
and provides a way for users to filter the articles by keyword. The article page 
displays the full title and description of the selected article.

The application is written in TypeScript and uses CSS preprocessors with Material UI. 
The state management is implemented using the React hooks useState and useEffect and useContext.
Also in this task I`m implement custom hook useAsync to handle async requests.

In summary, this repository contains a Single Page Application (SPA) built with React that uses an 
open API to retrieve article names and descriptions. It includes a home page with a list of cards with 
article titles and descriptions, a way for users to filter the articles by keyword, and an article 
page that displays the full title and description of the selected article. The filtering functionality 
is implemented using a custom hook, and the project uses TypeScript, CSS preprocessors, Material-UI
and the state management implemented using the React hooks useState, useEffect and useContext. All async 
requests are handled using custom hook useAsync.