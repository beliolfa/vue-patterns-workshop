const _ = require('lodash')

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Name of the file:',
    validate(value) {
      if (!value.length) {
        return 'File must have a name.'
      }
      const fileName = _.kebabCase(value)
      if (fileName.indexOf('poo') === -1) {
        return 'Name of the file must be "poo"'
      }
      return true
    },
  },
  {
    type: 'select',
    name: 'extension',
    message: 'Extension:',
    choices: [
      {
        name: 'css',
        message: '.css',
      },
      {
        name: 'scss',
        message: '.scss',
      },
      {
        name: 'sass',
        message: '.sass',
      },
    ],
    validate(value) {
      if (!value) {
        return 'File requires an extension'
      }
      return true
    },
  },
]
