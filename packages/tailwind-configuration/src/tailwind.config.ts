/* eslint-disable @typescript-eslint/naming-convention */
import { DeepPartial } from '@webundsoehne/ts-utility-types'
import defu from 'defu'
import { CSSProperties } from 'styled-components'
import defaultTheme from 'tailwindcss/defaultTheme'
import { TailwindConfig } from 'tailwindcss/tailwind-config'
import { getColors } from 'theme-colors'

export function generateTailwindConfiguration (config?: DeepPartial<TailwindConfig>): DeepPartial<TailwindConfig> {
  return defu<any, DeepPartial<TailwindConfig> & { theme: { extend: { typography: any } } }>(config, {
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          sans: [ 'DM Sans', ...(defaultTheme.fontFamily as any).sans ],
          mono: [ 'Consolas', ...(defaultTheme.fontFamily as any).mono ]
        },
        colors: {
          primary: getColors('#cd0043'),
          gray: getColors('#434951'),
          orange: getColors('#fa8350')
        },
        inset: {
          16: '4rem'
        },
        typography: (theme: (s: string) => any): Record<PropertyKey, Record<PropertyKey, Record<PropertyKey, CSSProperties>>> => ({
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
                paddingTop: theme('padding.0.5'),
                paddingBottom: theme('padding.0.5'),
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
                borderRadius: 0,
                lineHeight: theme('lineHeight.3')
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
              'ul > li': {
                paddingLeft: '1em',
                textAlign: 'left'
              },
              'ol > li': {
                paddingLeft: '1em',
                textAlign: 'left'
              },
              'ol > li::before': {
                top: 'calc(0.875em - 0.1em)'
              },
              'ul > li::before': {
                top: 'calc(0.875em - 0.1em)'
              },
              img: {
                display: 'inline-block',
                marginBottom: '0.25em',
                marginTop: '0.25em',
                borderColor: theme('colors.gray.300')
              },
              video: {
                borderColor: theme('colors.gray.300')
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
              },
              img: {
                borderColor: theme('colors.gray.800')
              },
              video: {
                borderColor: theme('colors.gray.800')
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
    content: [ '**/src/**/*.{js,ts,jsx,tsx,md,mdx}', '**/node_modules/@cenk1cenk2-presentations/**/*.{js,ts,jsx,tsx}' ]
  })
}
