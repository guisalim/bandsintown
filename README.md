# BandsInTown Challenge
It consists on a SPA - Single Page Application that takes an artist from the user and returns details about the artist and their events.


## Getting Started
### Prerequisites:
BandsInTown Challenge requires:
* [Node.js](https://nodejs.org/en/download/) - a javascript runtime built using Chrome's V8 Javascript Engine. BandsInTown Challenge' project requires at least version 6+. You can check if you have Node.js using the following command on your terminal or download it using the previous link:
```
node -v
```
* NPM or Yarn
  * NPM is a package manager installed with Node.js, so if you have Node.js installed, then you should also got NPM. You can check you NPM version using the following command:
```
npm -v
```
  * You can use Yarn as a substitute to NPM. Yarn is a package manager built by Facebook, Google, Exponential, and Tilde. It is said to be safer and faster then NPM.
You can download it on [yarnpkg.com](https://yarnpkg.com/en/docs/install). On the other hand, if you have it installed, you can check Yarn's version using the following command:
```
yarn version
```

### Installing - Let's run it
You should download, install and run locally this repo using the following commands:

- If you're using NPM
```
git clone https://github.com/guisalim/bandsintown-challenge.git bandsintown
cd bandsintown
npm i
npm start
```
- If you're using YARN
```
git clone https://github.com/guisalim/bandsintown-challenge.git bandsintown
cd bandsintown
yarn install
yarn start
```

It will run locally on PORT 3000 and can be checked on your browser at ```http://localhost:3000```

### Tests
The automated tests can be run using the following script ```npm test```

## Acknowledgements
- BandsInTown Challenge Development
This project was build from scratch using the [create-react-app](https://github.com/facebook/create-react-app) boilerplate

- Packages included
This project include a few packages to support a better developement:
  * [React-Router](https://reacttraining.com/react-router/web/guides/philosophy)
  * [Prop-Types](https://github.com/facebook/prop-types)
  * [Semantic-UI](https://react.semantic-ui.com/)
  * [Enzyme](http://airbnb.io/enzyme/)


- Next Steps:
  * More test cases using Jest/Enzyme and deploy strategy with Docker!

## License 
This project is licensed under the terms of the MIT license.

## Contribution
Fell free to send suggestion or pull requests to improve this project.