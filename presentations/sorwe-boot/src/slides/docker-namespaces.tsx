import linuxNamespacesImg from '@assets/linux-namespaces.png'
import { H2, Image, Li, Note, Slide, Ul } from '@cenk1cenk2-presentations/react-reveal-base'
import { faDocker } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'

const DockerNamespaces: React.FC = () => {
  return (
    <Fragment>
      <Slide>
        <H2 className="mx-auto">
          <FontAwesomeIcon icon={faDocker} />
        </H2>
        <div className="grid grid-cols-2">
          <div className="grid-span-1 self-center">
            <Ul>
              <Li fragment={true}>namespaces</Li>
            </Ul>
          </div>
          <div className="grid-span-1 self-center">
            <Image src={linuxNamespacesImg} className="w-3/5 border-4 border-gray-800" fragment={true} />
          </div>
        </div>
        <Note data-markdown>{notes}</Note>
      </Slide>
    </Fragment>
  )
}

const notes = `
Burada containerlarimiz arasindaki islemleri entegre eden sey ise namespacesdir.

Ben linux uzerinden bildigim icin onun uzerinden bahsetmek istiyorum.

Namespaces kernelin belirli parcalarini kullanicilar, mount noktalari, network, processler gibi birbirinden izole ederek sanal ve daha kucuk alanlar yaratir.

Bu da elimizdeki containerd runtimein kontrolu sayesinde bize disariya izole ve sadece bizim istedigimiz kadar disariya erisimi olan paketleri bu sistemin oldugu heryere tasiyabilmemize ve tasidigimiz heryerde ayni sekilde calismasina yariyor.
`

export default DockerNamespaces
