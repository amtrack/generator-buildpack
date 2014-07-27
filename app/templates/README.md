# Heroku buildpack: <%= name %>

This is a [Heroku buildpack](http://devcenter.heroku.com/articles/buildpacks) for [<%= name %>](http://google.com/?q=<%= name %>).

[![Build Status](https://secure.travis-ci.org/<%= username %>/<%= projectname %>.png?branch=master)](http://travis-ci.org/<%= username %>/<%= projectname %>)

## Usage

Example usage:

    $ ls
    hello.txt

    $ heroku create --stack cedar --buildpack <%= url %>

    $ git push heroku master
    ...
    -----> Heroku receiving push
    -----> Fetching custom buildpack
    -----> <%= name %> app detected

Hacking
-------

To make changes to this buildpack, fork it on Github. Push up changes to your fork, then create a new Heroku app to test it, or configure an existing app to use your buildpack:

```
# Create a new Heroku app that uses your buildpack
heroku create --buildpack <your-github-url>

# Configure an existing Heroku app to use your buildpack
heroku config:set BUILDPACK_URL=<your-github-url>

# You can also use a git branch!
heroku config:set BUILDPACK_URL=<your-github-url>#your-branch
```

## Testing

```
./test-in-docker
```

For more info on testing, see [Best Practices for Testing Buildpacks](https://discussion.heroku.com/t/best-practices-for-testing-buildpacks/294) on the Heroku discussion forum.
