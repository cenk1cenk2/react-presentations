import 'reveal.js/dist/reveal.css'
import overlay from '@cenk1cenk2-presentations/react-reveal/assets/images/overlay.png'
import { MarkdownPlugin, MathPlugin, NotesPlugin, PrismHighlightPlugin, RevealJS, RevealJSProps, RevealPlugin, SearchPlugin, ZoomPlugin } from '@cenk1cenk2-presentations/react-reveal-base'
import consola from 'consola'
import 'prismjs/plugins/line-highlight/prism-line-highlight'
import 'prismjs/plugins/line-highlight/prism-line-highlight.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism-tomorrow.css'
import React, { Fragment } from 'react'
import { createGlobalStyle, css } from 'styled-components'
import tw, { theme } from 'twin.macro'
import '@cenk1cenk2-presentations/react-reveal/assets/styles/tailwind.css'

import { Wrapper } from './wrapper'

interface Props {
  reveal?: RevealJSProps<any[]>
  overlay?: boolean
}

export const Presentation: React.FC<Props> = (props) => {
  const plugins = [ PrismHighlightPlugin, MarkdownPlugin, MathPlugin, NotesPlugin, SearchPlugin, ZoomPlugin ]

  const themes = theme()

  consola.info('Theme initialized:', themes)

  return (
    <Fragment>
      <GlobalStyle />
      {props.overlay && <OverlayStyle />}
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
        <Wrapper />
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

        font-size: 48px;
      }
    }
  `
)

const OverlayStyle = createGlobalStyle(
  () => css`
    .reveal.slide {
      background: url(${overlay}) no-repeat center center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${overlay}', sizingMethod='scale');
      -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${overlay}', sizingMethod='scale');
    }
  `
)
