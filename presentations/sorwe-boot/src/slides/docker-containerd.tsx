import containersVsVmsImg from '@assets/containers-vs-virtual-machines.jpg'
import { H2, Image, Li, Note, Slide, Ul } from '@cenk1cenk2-presentations/react-reveal-base'
import { faDocker } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'

const DockerContainerd: React.FC = () => {
  return (
    <Fragment>
      <Slide>
        <H2 className="mx-auto">
          <FontAwesomeIcon icon={faDocker} />
        </H2>
        <div className="grid grid-cols-2">
          <div className="grid-span-1 max-w-md place-self-center">
            <Ul>
              <Li fragment={true}>containerd</Li>
            </Ul>
          </div>
          <div className="grid-span-1 self-center">
            <Image src={containersVsVmsImg} className="w-3/5 border-4 border-gray-800" fragment={true} />
          </div>
        </div>
        <Note data-markdown>{notes}</Note>
      </Slide>
    </Fragment>
  )
}

const notes = `
Bunlardan birincisi olan containerd sanal makineden farkli olarak altta yatan kerneli ortak bir sekilde kullanip ustunde kalan kismi izole ediyor.

<-next->

Boylece kerneli ortak kullandigimiz icin uzerinde bu kernele baz alan farkli isletim sistemlerini donanima arada hypervisor gibi bir cevirici olmadan direk ulastirarak elimizdeki kaynaklari daha iyi kullanan bir runtime elde ediyoruz.

<-next->

containerd hem windows, hem linux uzerinde yerel kernelerini kullanarak calisabilmektedir.

Burada containerd sadece bir runtimedir. Bundan once herkesin yakindan bildigi unix chroot ve kimsenin ilgisini cok cekmeyen LXC containerlari gibi oncul ornekleri olsada bu runtimein avantaji birden fazla containeri tek bir isletim sistemi uzerinde kolayca kontrol edebilmesidir.
`

export default DockerContainerd
