import { Presentation } from '@cenk1cenk2-presentations/react-reveal'
import '@cenk1cenk2-presentations/react-reveal/assets/styles/tailwind.css'
import { Slide, Note } from '@gregcello/revealjs-react'
import React, { Fragment } from 'react'

const App: React.FC = () => {
  return (
    <Fragment>
      <Presentation>
        <Slide>
          test
          <Note> test notes</Note>
        </Slide>
        <Slide>test</Slide>
        <Slide>test</Slide>
        <Slide>test</Slide>
        <Slide>test</Slide>
        <Slide>test</Slide>
        <Slide>test</Slide>
      </Presentation>
    </Fragment>
  )
}

export default App
