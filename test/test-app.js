/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('buildpack:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        someOption: true
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bin/compile',
      'bin/detect',
      'bin/release',
      'bin/test',
      'bin/utils',
      'test/hello-txt/hello.txt',
      'test/no-hello-txt/.gitkeep',
      'vendor/shunit2',
      'vendor/test-utils',
      'README.md',
      '.travis.yml',
      '.drone.yml',
      'test-in-docker',
      'Dockerfile',
      '.dockerignore'
    ]);
  });
});
