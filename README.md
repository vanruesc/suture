# Suture
[![Build status](https://travis-ci.org/vanruesc/suture.svg?branch=master)](https://travis-ci.org/vanruesc/suture) 
[![Windows build status](https://ci.appveyor.com/api/projects/status/0wbtqmte6hfyx17r?svg=true)](https://ci.appveyor.com/project/vanruesc/suture) 
[![GitHub version](https://badge.fury.io/gh/vanruesc%2Fsuture.svg)](http://badge.fury.io/gh/vanruesc%2Fsuture) 
[![npm version](https://badge.fury.io/js/suture.svg)](http://badge.fury.io/js/suture) 
[![Dependencies](https://david-dm.org/vanruesc/suture.svg?branch=master)](https://david-dm.org/vanruesc/suture)

A 3D game engine that stitches several systems together in order to provide a single API for game development purposes. 
Suture is currently a mostly-ready engine that is designed to be used by programmers. It builds upon the ideas behind 
[Rollup](http://rollupjs.org/) and embraces ES6 modules, thus providing a variety of tools that can be used selectively.


## Installation

Download the [minified library](http://vanruesc.github.io/suture/build/suture.min.js) and include it in your project:

```html
<script src="/js/suture.min.js"></script>
```

Install this module with [npm](https://www.npmjs.com) and aim to create a single JavaScript file that contains 
only the pieces of Suture that you actually use together with your own code. You install Suture as follows:

```sh
$ npm install suture
``` 


## Usage

```javascript
import Suture from "suture";

var suture = new Suture();

suture.run();
```


## Documentation
[API](http://vanruesc.github.io/oimo/docs)


## Rendering
Rendering is taken care of by [three.js](http://threejs.org).


## Physics
Physics are handled by a customized version of [oimo.js](https://github.com/vanruesc/oimo).


## Contributing
Maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.


## License
[Apache 2.0](https://github.com/vanruesc/suture/blob/master/LICENSE)
