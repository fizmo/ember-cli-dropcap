/* eslint-env node */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-dropcap',

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/dropcap.js');
    this.import('vendor/shims/dropcap.js');
  },

  treeForVendor(vendorTree) {
    const dropcapTree = new Funnel(path.dirname(require.resolve('dropcap.js/dropcap.js')), {
      files: ['dropcap.js'],
    });

    return new MergeTrees([vendorTree, dropcapTree]);
  }
};
