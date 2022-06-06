/** @type { import("tailwindcss/tailwind-config").TailwindConfig } */

const { getColors } = require('theme-colors')

const { generateTailwindConfiguration } = require('@cenk1cenk2-presentations/tailwind-configuration')

module.exports = generateTailwindConfiguration({
  theme: {
    extend: {
      colors: {
        primary: getColors('#fc4c02')
      }
    }
  }
})
