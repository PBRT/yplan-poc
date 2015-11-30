# YPLAN - Proof of concept

Little web application replicating [YplanAPP](https://yplanapp.com/) using my own kickstarter [ReacToGo](https://github.com/PBRT/reactogo). The goal of this app is to add smooth transition to the current YPLAN application using [React Motion](https://github.com/chenglou/react-motion) with [React Router](https://github.com/rackt/react-router).

## Live

You can find this project alive at [http://yplan-poc.herokuapp.com](http://yplan-poc.herokuapp.com).

## Installation

Simply clone this project and run successively ```npm install``` ```npm run start``` and go to [http://localhost:3000](http://localhost:3000). 

## Technologies

This project is using React 14 (ES2015), React-Router, React-Motion, VelocityJS, Gulp and Webpack (with Webpack-Dev-Server). You can find more information on my kickstarter project page [ReacToGo](https://github.com/PBRT/reactogo). There is no external API used but there is a service ready to use in ```utils/fetch.js``` using the Fetch API.

## Motivations

I was using the Yplan webapp in October 2015 and I noticed the lack of transition between the differents routes. I wanted since a while understand how to use react-motion with react-router. So I built that for improving my knowledge and also the UX of an well-known app.
