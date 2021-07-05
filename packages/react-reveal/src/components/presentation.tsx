import 'reveal.js/dist/reveal.css'
import {
  MarkdownPlugin,
  MathPlugin,
  NotesPlugin,
  PrismHighlightPlugin,
  RevealJS,
  RevealJSProps,
  RevealPlugin,
  SearchPlugin,
  ZoomPlugin
} from '@cenk1cenk2-presentations/react-reveal-base'
import consola from 'consola'
import 'prismjs/plugins/line-highlight/prism-line-highlight'
import 'prismjs/plugins/line-highlight/prism-line-highlight.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism-tomorrow.css'
import React, { Fragment } from 'react'
import { createGlobalStyle, css } from 'styled-components'
import tw, { theme } from 'twin.macro'
import '@cenk1cenk2-presentations/react-reveal/assets/styles/tailwind.css'

import { Wrapper, WrapperProps } from './wrapper'

export interface PresentationsProps extends WrapperProps {
  reveal?: RevealJSProps<any[]>
}

export const Presentation: React.FC<PresentationsProps> = (props) => {
  const plugins = [ PrismHighlightPlugin, MarkdownPlugin, MathPlugin, NotesPlugin, SearchPlugin, ZoomPlugin ]

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

        font-size: 42px;
      }
    }
  `
)
