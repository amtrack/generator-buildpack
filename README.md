# generator-buildpack [![Build Status](https://secure.travis-ci.org/amtrack/generator-buildpack.png?branch=master)](https://travis-ci.org/amtrack/generator-buildpack) [![Build Status](https://drone.io/github.com/amtrack/generator-buildpack/status.png)](https://drone.io/github.com/amtrack/generator-buildpack/latest)

> [Yeoman](http://yeoman.io) generator for creating a custom [Heroku buildpack](http://devcenter.heroku.com/articles/buildpacks).

## Features

* Generates buildpack scripts `bin/detect`, `bin/compile` and `bin/release`
* [shUnit2](https://code.google.com/p/shunit2) based test script `bin/test`
* Comes with a wrapper script `test-in-docker` to run `bin/test` in a *cedar*-like environment ([progrium/cedarish](https://github.com/progrium/cedarish))
* [Travis CI](https://travis-ci.org/) and [Drone](https://github.com/drone/drone) files


## Getting Started

To install generator-buildpack from npm, run:

```bash
$ npm install -g generator-buildpack
```

Finally, initiate the generator:

```bash
$ mkdir heroku-buildpack-hello
$ cd $_
$ yo buildpack
Tell me about your custom Heroku buildpack.
[?] Buildpack for: hello
[?] Would you mind telling me your username on GitHub: amtrack
```

### Info

Most of the stuff is stolen from the [Buildpack API documentation](https://devcenter.heroku.com/articles/buildpack-api) and [heroku/heroku-buildpack-python](https://github.com/heroku/heroku-buildpack-python)

## License

MIT
