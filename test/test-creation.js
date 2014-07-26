/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('buildpack generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('buildpack:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      'bin/compile',
      'bin/detect',
      'bin/release',
      'bin/test',
      'bin/utils',
      'README.md',
      '.travis.yml'
    ];

    helpers.mockPrompt(this.app, {
      // 'name': 'hello'
    });
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
