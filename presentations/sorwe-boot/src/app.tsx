import { Presentation } from '@cenk1cenk2-presentations/react-reveal'
import React, { Fragment } from 'react'

import BenKimim from './slides/ben'
import Docker from './slides/docker'
import DockerContainerd from './slides/docker-containerd'
import DockerNamespaces from './slides/docker-namespaces'
import Greetings from './slides/greetings'
import Siz from './slides/siz'

const App: React.FC = () => {
  return (
    <Fragment>
      <Presentation overlay="firstAndLast">
        <Greetings />

        <BenKimim />
        <Siz />

        <Docker />
        <DockerContainerd />
        <DockerNamespaces />

        <Greetings />
      </Presentation>
    </Fragment>
  )
}

export default App
