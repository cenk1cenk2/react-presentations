import React, { Fragment } from 'react'
import { RevealJS, useReveal } from '@gregcello/revealjs-react'
import 'reveal.js'
import { HighlightPlugin, MarkdownPlugin, MathPlugin, NotesPlugin, SearchPlugin, ZoomPlugin } from '@gregcello/revealjs-react'

export const Presentation: React.FC = (props) => {
  const plugins = [HighlightPlugin, MarkdownPlugin, MathPlugin, NotesPlugin, SearchPlugin, ZoomPlugin]

  return (
    <Fragment>
      <RevealJS plugins={plugins}>{props.children}</RevealJS>
    </Fragment>
  )
}
