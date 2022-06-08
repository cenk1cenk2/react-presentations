import 'reveal.js/dist/reveal.css'
import 'prism-themes/themes/prism-one-dark.css'
import 'prismjs/plugins/line-highlight/prism-line-highlight'
import 'prismjs/plugins/line-highlight/prism-line-highlight.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import '@cenk1cenk2-presentations/react-reveal/assets/styles/tailwind.css'
import consola from 'consola'
import React, { Fragment } from 'react'
import { createGlobalStyle, css } from 'styled-components'
import tw, { theme } from 'twin.macro'

import { Wrapper, WrapperProps } from './wrapper'
import { MarkdownPlugin, NotesPlugin, PrismHighlightPlugin, RevealJS, RevealJSProps, RevealPlugin, SearchPlugin, ZoomPlugin } from '@cenk1cenk2-presentations/react-reveal-base'

export interface PresentationsProps extends WrapperProps {
  reveal?: RevealJSProps<any[]>
  children?: React.ReactNode
}

export const Presentation: React.FC<PresentationsProps> = (props) => {
  const plugins = [ MarkdownPlugin, NotesPlugin, SearchPlugin, ZoomPlugin, PrismHighlightPlugin ]

  const themes = theme()

  consola.info('Theme initialized:', themes)

  return (
    <Fragment>
      <DefaultGlobalStyle />
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
        pluginProps={{ prism: { theme: 'atom-one-dark' } }}
        {...props.reveal}
      >
        {props.children}
        <Wrapper overlay={props.overlay} />
      </RevealJS>
    </Fragment>
  )
}

export const DefaultGlobalStyle = createGlobalStyle(
  () => css`
    #root {
      ${tw`w-full h-full`}

      ${tw`bg-gray-900`}

      ${tw`prose prose-dark max-w-none`}

      font-size: 40px;

      pre {
        ${tw`text-xl! border-4 rounded-3xl border-gray-700 bg-gray-800 shadow-lg px-4`}

        code {
          ${tw`overflow-x-scroll`}
        }
      }

      pre[class*='language-'].line-numbers {
        ${tw`pl-24!`}
      }

      ::selection,
      ::moz-selection {
        ${tw`text-gray-500!`}
      }

      .reveal {
        .progress {
          ${tw`bg-gray-600 text-primary-600`}
        }

        .controls {
          ${tw`text-primary-700`}
        }

        img,
        video,
        iframe {
          max-width: 95%;
          max-height: 95%;
        }

        em {
          ${tw`italic`}
        }

        .speaker-notes,
        .speaker-notes ::before,
        #speaker-controls {
          ${tw`text-gray-50 bg-gray-900`}
        }
      }
    }
  `
)
