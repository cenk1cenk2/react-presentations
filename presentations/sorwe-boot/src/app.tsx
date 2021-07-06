import { Presentation } from '@cenk1cenk2-presentations/react-reveal'
import React, { Fragment } from 'react'

import BenKimim from './slides/ben'
import CiCd from './slides/ci-cd'
import CiCdKeynotes from './slides/ci-cd-keynotes'
import Docker from './slides/docker'
import DockerChanges from './slides/docker-changes'
import DockerCompose from './slides/docker-compose'
import DockerContainerd from './slides/docker-containerd'
import DockerKeynotes from './slides/docker-keynotes'
import DockerNamespaces from './slides/docker-namespaces'
import DockerSelf from './slides/docker-self'
import Dockerfile from './slides/dockerfile'
import Greetings from './slides/greetings'
import Last from './slides/last'
import Siz from './slides/siz'
import SizeBirSoru from './slides/size-soru'
import WhatsNext from './slides/what-is-next'

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
        <DockerSelf />
        <Dockerfile />
        <DockerCompose />
        <DockerChanges />
        <DockerKeynotes />

        <CiCd />
        <CiCdKeynotes />

        <SizeBirSoru />

        <WhatsNext />

        <Last />
      </Presentation>
    </Fragment>
  )
}

export default App
