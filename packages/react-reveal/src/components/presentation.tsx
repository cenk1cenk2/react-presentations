import 'reveal.js/dist/reveal.css'
import 'prism-themes/themes/prism-vsc-dark-plus.css'
import 'prismjs/plugins/line-highlight/prism-line-highlight'
import 'prismjs/plugins/line-highlight/prism-line-highlight.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import '@cenk1cenk2-presentations/react-reveal/assets/styles/tailwind.css'
import { MarkdownPlugin, NotesPlugin, PrismHighlightPlugin, RevealJS, RevealJSProps, SearchPlugin, ZoomPlugin } from '@cenk1cenk2-presentations/react-reveal-base'
import consola from 'consola'
import React, { Fragment } from 'react'
import { createGlobalStyle, css } from 'styled-components'
import tw, { theme } from 'twin.macro'

import { Wrapper, WrapperProps } from './wrapper'

export interface PresentationsProps extends WrapperProps {
  reveal?: RevealJSProps<any[]>
}

export const Presentation: React.FC<PresentationsProps> = (props) => {
  const plugins = [ MarkdownPlugin, NotesPlugin, SearchPlugin, ZoomPlugin, PrismHighlightPlugin ]

  const themes = theme()

  consola.info('Theme initialized:', themes)

  return (
    <Fragment>
      <GlobalStyle />
      <RevealJS
        plugins={plugins}
        controls={true}
        controlsTutorial={false}
        previewLinks={true}
        hash={true}
        width={1920}
        height={980}
        margin={0}
        center={true}
        overview={true}
        transition="slide"
        navigationMode="linear"
        loop={true}
        autoPlayMedia={true}
        {...props.reveal}
      >
        {props.children}
        <Wrapper overlay={props.overlay} />
      </RevealJS>
    </Fragment>
  )
}

const GlobalStyle = createGlobalStyle(
  () => css`
    body {
      #root {
        ${tw`w-full h-full`}

        ${tw`bg-gray-900`};

        ${tw`prose prose-dark max-w-none`}

        font-size: 38px;

        ul > li {
          padding-left: 1em;

          ::before {
            top: calc(0.875em - 0.1em);
          }
        }

        ol > li {
          padding-left: 1em;

          ::before {
            top: calc(0.875em - 0.1em);
          }
        }

        pre {
          ${tw`leading-3 border-4 border-gray-700 shadow-lg`}

          code {
            ${tw`pl-5`}

            .line-numbers-rows {
              left: -3.8em !important;
              line-height: 0.95rem;
              ${tw`h-full border-r-2 border-gray-700 top-0! text-gray-600`}
            }
          }
        }

        pre[class*='language-'].line-numbers {
          padding-left: 2.25em !important;
        }
      }
    }
  `
)
