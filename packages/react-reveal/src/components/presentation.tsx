import '@cenk1cenk2-presentations/react-reveal/assets/styles/tailwind.css'
import {
  enablePrismLineNumbers,
  MarkdownPlugin,
  MathPlugin,
  NotesPlugin,
  PrismHighlightPlugin,
  RevealJS,
  RevealJSProps,
  SearchPlugin,
  useReveal,
  ZoomPlugin
} from '@gregcello/revealjs-react'
import 'prismjs/plugins/line-highlight/prism-line-highlight'
import 'prismjs/plugins/line-highlight/prism-line-highlight.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism-tomorrow.css'
import React, { Fragment, useEffect } from 'react'
import 'reveal.js/dist/theme/black.css'
import styled, { css } from 'styled-components'
import tw, { GlobalStyles } from 'twin.macro'

interface Props {
  reveal?: RevealJSProps<any[]>
}

export const Presentation: React.FC<Props> = (props) => {
  const plugins = [ PrismHighlightPlugin, MarkdownPlugin, MathPlugin, NotesPlugin, SearchPlugin, ZoomPlugin ]

  const { reveal } = useReveal()

  useEffect(() => {
    if (!reveal) {
      return
    }

    enablePrismLineNumbers()
  }, [ reveal ])

  return (
    <Fragment>
      <GlobalStyles />
      <RevealContainer>
        <RevealJS
          plugins={plugins}
          controls={true}
          controlsTutorial={false}
          previewLinks={true}
          hash={true}
          width={1920}
          height={960}
          margin={0}
          center={true}
          overview={true}
          transition="slide"
          navigationMode="linear"
          loop={true}
          autoPlayMedia={true}
        >
          {props.children}
        </RevealJS>
      </RevealContainer>
    </Fragment>
  )
}

const RevealContainer = styled.div(
  () => css`
    ${tw`h-full w-full`}

    .reveal .slide {
      ${tw`bg-primary-300`}
    }
  `
)
