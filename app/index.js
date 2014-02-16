'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var fs = require('fs');


var BuildpackGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.on('end', function () {
      // temporary fix until https://github.com/SBoudrias/file-utils/issues/5 is fixed in yeoman
      fs.chmodSync(path.join(this.destinationRoot(), 'bin/compile'), '755');
      fs.chmodSync(path.join(this.destinationRoot(), 'bin/detect'), '755');
      fs.chmodSync(path.join(this.destinationRoot(), 'bin/release'), '755');
      fs.chmodSync(path.join(this.destinationRoot(), 'bin/test'), '755');
      fs.chmodSync(path.join(this.destinationRoot(), 'bin/utils'), '755');
    });
  },

  askFor: function () {
    var done = this.async();

    // try to guess name
    this.projectname = path.basename(process.cwd());
    this.name = this.appname.replace('heroku', '').replace('buildpack', '').replace(/\s/g, '');

    // replace it with a short and sweet description of your generator
    console.log(chalk.magenta('You\'re using the fantastic Buildpack generator.'));

    var prompts = [
    {
      type: 'text',
      name: 'name',
      message: 'name',
      default: this.name
    },
    {
      type: 'text',
      name: 'username',
      message: 'GitHub Username',
      default: 'username'
    }
    ];

    this.prompt(prompts, function (props) {
      this.username = props.username;
      this.name = props.name || this.name;
      this.url = 'https://github.com/'+this.username+'/'+this.projectname;
      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('bin');
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
    this.copy('.travis.yml', '.travis.yml');
  }
});

module.exports = BuildpackGenerator;
