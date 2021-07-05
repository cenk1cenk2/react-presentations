/** @type { import("tailwindcss/tailwind-config").TailwindConfig } */

const { generateTailwindConfiguration } = require('@cenk1cenk2-presentations/tailwind-configuration')
const { getColors } = require('theme-colors')

module.exports = generateTailwindConfiguration({
  theme: {
    extend: {
      colors: {
        primary: getColors('#fc4c02')
      }
    }
  }
})
