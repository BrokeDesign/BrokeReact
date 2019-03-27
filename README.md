<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better please fork the repo and create a pull request or simple open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->





<!-- PROJECT SHIELDS -->
[![Build Status][build-shield]]() <br />
[![Netlify Status](https://api.netlify.com/api/v1/badges/40aee951-68c0-4d2d-a7d3-675c57166adc/deploy-status)][netlify-build-shield]
[![Contributors][contributors-shield]]()
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://brokeds.netlify.com">
    <img src="./public/logo.svg" alt="Logo">
  </a>

  <h3 align="center">Broke Design System</h3>

  <p align="center">
    A design system with an opinionated React Component library and CSS framework.
    <br />
    <a href="https://brokeds.netlify.com/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://brokeds.netlify.com/">View Demo</a>
    ·
    <a href="https://github.com/BrokeDesign/BrokeReact/issues">Report Bug</a>
    ·
    <a href="https://github.com/BrokeDesign/BrokeReact/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
* [Development - Getting Started](#development-getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://brokeds.netlify.com/) 

While there are plenty of css frameworks, design systems, and react component libraries out in the wild, it can be a struggle to find one that allows simple implementation and use along with heavy trust in the user to customize to their needs without having to jump through hoops. This project aims to remediate that.

### Built With

* [SASS](https://sass.com) 
* [React](https://reactjs.org)
* [Webpack](https://webpackjs.com)
* [Babel](https://babeljs.com)
* [StoryBook](https://storybook.js.org)


<!-- GETTING STARTED -->
## Getting Started

Broke React is a part of 

### Installation
**Node Module**

_npm or yarn_
```sh
npm i -D @brokeds/broke-react
```
```sh
yarn add -D @brokeds/broke-everything
```

Then import whatever component wherever you want to use it.
```js
import {<component name>} @brokeds/broke-react
```


**Github repo**

Clone the repo and navigate to the full feature directory

```sh
git clone https://github.com/BrokeDesign/BrokeReact.git  && /
cd ./BrokeDS/BrokeReact
```

Install NPM packages and start the server

```sh
npm i && yarn start
```
```sh
yarn add && yarn start
```

Start the dev server
```sh
npm start
```
```sh
yarn start
```

Start the dev server and Storybook instance (https://localhost:6006)
//! important: The dev server is only included if you decide to make use of it, also webpack watches for changes and hotloads modules.
```
npm start 
```

<!-- USAGE EXAMPLES -->
## Usage

Using CSS in react app:

**Import package in entry file**

```js
import { <Component Name> } from '@brokeds/broke-react' 
```

example:
```js
import React from 'react';
import {Card, CardContent, CardHead, CardFoot } from '@brokeds/broke-react';

const ExampleComponent = () => {
  return(
    <Card>
      <CardHead>
        <h2>Card Header</h2>
      </CardHead>
      <CardContent>
        Here is content
      </CardContent>
      <CardFoot>
        <p>Card Footer</p>
      </CardFoot>
    </Card>
  );
}

export default ExampleComponent;

```



_For more examples, please refer to the [Documentation](https://brokeds.netlify.com/) or the storybook instance_



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Christian Gorke - [@skothasec](https://twitter.com/skothasec) - dev.cmgorke@gmail.com

Project Link: [https://github.com/SkothaSec/BrokeDS](https://github.com/SkothaSec/BrokeDS)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [SASS Guidelines](https://sass-guidline.es/)
  * [7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)
* **Color Sytems**
  * Article - [_The Light and the Dark Side: Creating a UI colour system_](https://uxdesign.cc/the-light-and-the-dark-side-creating-a-ui-colour-system-in-3-steps-41818c5bdb60)





<!-- MARKDOWN LINKS & IMAGES -->
[netlify-build-shield]: https://app.netlify.com/sites/brokeds/deploys
[build-shield]: https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square
[contributors-shield]: https://img.shields.io/badge/contributors-1-orange.svg?style=flat-square
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://choosealicense.com/licenses/mit
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/cmgorke
[product-screenshot]: https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/screenshot.png