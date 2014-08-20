'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var fs = require('fs');

var BuildpackGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // try to guess name
    this.projectname = path.basename(process.cwd());
    this.name = this.appname.replace('heroku', '').replace('buildpack', '').replace(/\s/g, '');

    // replace it with a short and sweet description of your generator
    this.log(yosay('Tell me about your custom Heroku buildpack.'));

    var prompts = [
    {
      type: 'text',
      name: 'name',
      message: 'Buildpack for',
      default: this.name
    },
    {
      type: 'text',
      name: 'username',
      message: 'Would you mind telling me your username on GitHub',
      default: 'someuser'
    }
    ];

    this.prompt(prompts, function (props) {
      this.username = props.username;
      this.name = props.name || this.name;
      this.url = 'https://github.com/'+this.username+'/'+this.projectname;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir('bin');
      this.template('bin/compile');
      this.template('bin/detect');
      this.template('bin/release');
      this.template('bin/test');
      this.template('bin/utils');
      this.directory('test', 'test');
      this.directory('vendor', 'vendor');
    },

    projectfiles: function () {
      this.template('README.md');
      this.src.copy('.travis.yml', '.travis.yml');
      this.src.copy('.drone.yml', '.drone.yml');
      this.template('test-in-docker');
      this.template('Dockerfile');
      this.src.copy('.dockerignore', '.dockerignore');
    }
  },

  end: function () {
    // temporary fix until https://github.com/SBoudrias/file-utils/issues/5 is fixed in yeoman
    fs.chmodSync(path.join(this.destinationRoot(), 'bin/compile'), '755');
    fs.chmodSync(path.join(this.destinationRoot(), 'bin/detect'), '755');
    fs.chmodSync(path.join(this.destinationRoot(), 'bin/release'), '755');
    fs.chmodSync(path.join(this.destinationRoot(), 'bin/test'), '755');
    fs.chmodSync(path.join(this.destinationRoot(), 'bin/utils'), '755');
    fs.chmodSync(path.join(this.destinationRoot(), 'test-in-docker'), '755');
  }
});

module.exports = BuildpackGenerator;
