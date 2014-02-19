# generator-buildpack [![Build Status](https://secure.travis-ci.org/amtrack/generator-buildpack.png?branch=master)](https://travis-ci.org/amtrack/generator-buildpack) [![Build Status](https://drone.io/github.com/amtrack/generator-buildpack/status.png)](https://drone.io/github.com/amtrack/generator-buildpack/latest)

> [Yeoman](http://yeoman.io) generator for creating a custom [Heroku buildpack](http://devcenter.heroku.com/articles/buildpacks).


## Getting Started

To install generator-buildpack from npm, run:

```
$ npm install -g generator-buildpack
```

Finally, initiate the generator:

```
$ mkdir heroku-buildpack-python
$ cd heroku-buildpack-python
$ yo buildpack
Tell me about your custom Heroku buildpack.
[?] Buildpack for: python
[?] Your GitHub Username: amtrack
```

The following files will be generated for you:

```
$ tree
.
├── README.md
├── bin
│   ├── compile
│   ├── detect
│   ├── release
│   ├── test
│   └── utils
├── test
│   └── hello-txt
│       └── hello.txt
└── vendor
    ├── shunit2
    │   └── shunit2
    └── test-utils
        └── test-utils
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

### Info

Most of the stuff is stolen from [heroku/heroku-buildpack-nodejs](https://github.com/heroku/heroku-buildpack-nodejs) and [heroku/heroku-buildpack-python](https://github.com/heroku/heroku-buildpack-python)

## License

MIT
