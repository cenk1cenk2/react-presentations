import { join } from 'path'
import defaultTheme from 'tailwindcss/defaultTheme'
import { getColors } from 'theme-colors'
import defu from 'defu'

export function generateTailwindConfiguration(config?: Record<PropertyKey, any>): Record<PropertyKey, any> {
  return defu.arrayFn(
    {
      jit: true,
      darkMode: 'class',
      future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        defaultLineHeights: true,
        standardFontWeights: true
      },
      theme: {
        extend: {
          fontFamily: {
            sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
            mono: ['DM Mono', ...defaultTheme.fontFamily.mono]
          },
          colors: {
            primary: getColors('#cd0043'),
            gray: getColors('#434951'),
            orange: getColors('#fa8350')
          },
          maxHeight: {
            '(screen-16)': 'calc(100vh - 4rem)'
          },
          inset: {
            16: '4rem'
          },
          transitionProperty: {
            padding: 'padding'
          },
          typography: (theme) => ({
            DEFAULT: {
              css: {
                a: {
                  color: theme('colors.primary.500'),
                  'text-decoration': 'none'
                },
                h2: {
                  paddingBottom: theme('padding.2'),
                  borderBottomWidth: '1px',
                  borderBottomColor: theme('colors.gray.200')
                },
                h3: {
                  paddingBottom: theme('padding.2'),
                  borderBottomWidth: '1px',
                  borderBottomColor: theme('colors.gray.200')
                },
                blockquote: {
                  fontWeight: '400',
                  color: theme('colors.gray.600'),
                  fontStyle: 'normal',
                  quotes: '"\\201C""\\201D""\\2018""\\2019"'
                },
                'blockquote p:first-of-type::before': {
                  content: ''
                },
                'blockquote p:last-of-type::after': {
                  content: ''
                },
                code: {
                  fontWeight: '400',
                  backgroundColor: theme('colors.gray.100'),
                  padding: theme('padding.1'),
                  borderWidth: 1,
                  borderColor: theme('colors.gray.200'),
                  borderRadius: theme('borderRadius.default')
                },
                'code::before': {
                  content: ''
                },
                'code::after': {
                  content: ''
                },
                'h3 code': {
                  fontWeight: '600'
                },
                'pre code': {
                  fontFamily: 'DM Mono'
                },
                'a code': {
                  color: theme('colors.primary.500')
                },
                img: {
                  display: 'inline-block',
                  'margin-bottom': '0.25em',
                  'margin-top': '0.25em'
                }
              }
            },
            dark: {
              css: {
                color: theme('colors.gray.100'),
                '[class~="lead"]': {
                  color: theme('colors.gray.100')
                },
                a: {
                  color: theme('colors.primary.500')
                },
                strong: {
                  color: theme('colors.gray.100')
                },
                'ol > li::before': {
                  color: theme('colors.gray.400')
                },
                'ul > li::before': {
                  backgroundColor: theme('colors.gray.600')
                },
                hr: {
                  borderColor: theme('colors.gray.700')
                },
                blockquote: {
                  color: theme('colors.gray.400'),
                  borderLeftColor: theme('colors.gray.700')
                },
                h1: {
                  color: theme('colors.gray.100')
                },
                h2: {
                  color: theme('colors.gray.100'),
                  borderBottomColor: theme('colors.gray.800')
                },
                h3: {
                  color: theme('colors.gray.100'),
                  borderBottomColor: theme('colors.gray.800')
                },
                h4: {
                  color: theme('colors.gray.100')
                },
                'figure figcaption': {
                  color: theme('colors.gray.400')
                },
                p: {
                  color: theme('colors.gray.100')
                },
                code: {
                  color: theme('colors.gray.100'),
                  backgroundColor: theme('colors.gray.800'),
                  borderWidth: 0
                },
                'a code': {
                  color: theme('colors.primary.500')
                },
                thead: {
                  color: theme('colors.gray.100'),
                  borderBottomColor: theme('colors.gray.600')
                },
                'tbody tr': {
                  borderBottomColor: theme('colors.gray.700')
                }
              }
            }
          })
        }
      },
      plugins: [
        require('tailwindcss-dark-mode')(),
        require('@tailwindcss/typography')({
          modifiers: []
        }),
        require('tailwind-css-variables')({
          colors: 'color',
          screens: false,
          fontFamily: false,
          fontSize: false,
          fontWeight: false,
          lineHeight: false,
          letterSpacing: false,
          backgroundSize: false,
          borderWidth: false,
          borderRadius: false,
          width: false,
          height: false,
          minWidth: false,
          minHeight: false,
          maxWidth: false,
          maxHeight: false,
          padding: false,
          margin: false,
          boxShadow: false,
          zIndex: false,
          opacity: false
        }),
        require('@tailwindcss/forms')
      ],
      purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
          'content/**/*.md',
          join(__dirname, 'components/**/*.vue'),
          join(__dirname, 'layouts/**/*.vue'),
          join(__dirname, 'pages/**/*.vue'),
          join(__dirname, 'plugins/**/*.js'),
          'nuxt.config.js'
        ],
        options: {
          whitelist: ['dark']
        }
      }
    },
    config
  )
}
