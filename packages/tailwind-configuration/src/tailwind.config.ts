import defu from 'defu'
import { DeepPartial } from 'helper-types'
import { CSSProperties } from 'styled-components'
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'
import { TailwindConfig } from 'tailwindcss/tailwind-config'
import { getColors } from 'theme-colors'

export function generateTailwindConfiguration (config?: DeepPartial<TailwindConfig>): DeepPartial<TailwindConfig> {
  return defu<any, any>(config, {
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
          sans: [ 'DM Sans', ...defaultTheme.fontFamily.sans ],
          mono: [ 'Consolas', ...defaultTheme.fontFamily.mono ]
        },
        colors: {
          primary: getColors('#cd0043'),
          gray: getColors('#434951'),
          orange: getColors('#fa8350')
        },
        inset: {
          16: '4rem'
        },
        typography: (theme: (s: string) => any): Record<string, Record<string, Record<string, CSSProperties>>> => ({
          DEFAULT: {
            css: {
              a: {
                color: theme('colors.primary.500'),
                textDecoration: 'none'
              },
              h1: {
                paddingTop: theme('padding.1'),
                paddingBottom: theme('padding.1'),
                marginBottom: 0,
                marginTop: 0,
                borderWidth: 0
              },
              h2: {
                paddingTop: theme('padding.1'),
                paddingBottom: theme('padding.1'),
                marginBottom: 0,
                marginTop: 0,
                borderWidth: 0
              },
              h3: {
                paddingTop: theme('padding.1/2'),
                paddingBottom: theme('padding.1/2'),
                marginBottom: 0,
                marginTop: 0,
                borderWidth: 0
              },
              blockquote: {
                fontWeight: 400,
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
                fontWeight: 400,
                backgroundColor: theme('colors.gray.100'),
                padding: theme('padding.1'),
                borderWidth: 0,
                borderColor: theme('colors.gray.200'),
                borderRadius: 0
              },
              pre: {
                borderRadius: 0
              },
              'code::before': {
                content: ''
              },
              'code::after': {
                content: ''
              },
              'h3 code': {
                fontWeight: 600
              },
              'a code': {
                color: theme('colors.primary.500')
              },
              img: {
                display: 'inline-block',
                marginBottom: '0.25em',
                marginTop: '0.25em'
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
                color: theme('colors.gray.100')
              },
              h3: {
                color: theme('colors.gray.100')
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
                backgroundColor: theme('colors.gray.800')
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
      require('@tailwindcss/forms'),
      plugin(({ addBase, theme }) => {
        const revealClassSelector = '.reveal'

        const cssMaps = [
          mapMultipleComponentsWithCss([ '::selection', '::-moz-selection' ], {
            background: theme('colors.gray.500')
          }),
          mapMultipleComponentsWithCss([ 'img', 'video', 'iframe' ], { maxWidth: '95%', maxHeight: '95%' }, revealClassSelector),
          mapMultipleComponentsWithCss([ 'em' ], { fontStyle: 'italic' }, revealClassSelector),
          mapMultipleComponentsWithCss([ '.controls' ], { color: theme('colors.primary.600') }, revealClassSelector),
          mapMultipleComponentsWithCss([ '.progress' ], { background: theme('colors.gray.700'), color: theme('colors.primary.500') }, revealClassSelector)
        ]

        addBase(cssMaps.reduce((o, c) => ({ ...o, ...c }), {}))
      })
    ],
    purge: {
      enabled: process.env.NODE_ENV === 'production',
      content: [ './src/**/*.{js,ts,jsx,tsx}', '**/node_modules/cenk1cenk2-presentations/**/*.{js,ts,jsx,tsx}' ]
    }
  })
}

function mapMultipleComponentsWithCss (components: string[], css: CSSProperties, prefix?: string): Record<PropertyKey, CSSProperties> {
  return components.reduce((o, c) => ({ ...o, [prefix ? `${prefix} ${c}` : c]: css }), {})
}
