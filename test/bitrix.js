const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const describe = require('mocha').describe;
const before = require('mocha').before;
const it = require('mocha').it;
const createFiles = require('./helpers/create-files');
const _ = require('lodash');

describe('generator-carcass:app:bitrix', () => {
  before(function() {
    this.timeout(10000);
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({generator: 'bitrix'})
      .toPromise();
  });

  it('creates files', () => {
    assert.file(_.uniq([].concat(
      createFiles.base,
      createFiles.bitrix,
      createFiles.frontend.map((f) => f.replace('#DIR#', 'www'))
    )));
  });
});
