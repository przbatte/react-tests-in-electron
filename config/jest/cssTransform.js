'use strict';

const crypto = require('crypto')

// This is a custom Jest transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/en/webpack.html

module.exports = {
  process(css, filename) {
    const contentHash = crypto.createHash('sha256').update(css, 'utf8').digest('hex')

    if (process.env.npm_package_jest_testEnvironment === 'jest-electron/environment') {
      if (document.getElementById(contentHash) === null) {
        const head = document.head || document.getElementsByTagName('head')[0]
        const style = document.createElement('style')
        style.appendChild(document.createTextNode(css))
        style.type = 'text/css'
        style.id = contentHash
        head.appendChild(style)
      }
    }

    return 'module.exports = {};';
  },
  getCacheKey(css) {
    return Math.random().toString()
  },
};
