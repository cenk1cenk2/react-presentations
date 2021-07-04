import { Presentation } from '@cenk1cenk2-presentations/react-reveal'
import { Code, H2, Slide } from '@cenk1cenk2-presentations/react-reveal-base'
import React, { Fragment } from 'react'

const App: React.FC = () => {
  return (
    <Fragment>
      <Presentation>
        <Slide>
          <H2 className="bg-gray-800">test</H2>
          <Code language="typescript">
            {{
              code: 'const f: number = 2'
            }}
          </Code>
        </Slide>
        <Slide>
          <H2>test2</H2>
        </Slide>
      </Presentation>
    </Fragment>
  )
}

export default App
