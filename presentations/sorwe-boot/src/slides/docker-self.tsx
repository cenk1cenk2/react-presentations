import { Div, H2, Li, Note, Slide, Ul } from '@cenk1cenk2-presentations/react-reveal-base'
import { faDocker } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'

const DockerSelf: React.FC = () => {
  return (
    <Fragment>
      <Slide>
        <H2>
          <FontAwesomeIcon icon={faDocker} />
        </H2>
        <Div fragment={true}>evet, bunlar zaten linux alt yapisinin tek basina yapabilecegi seyler.</Div>
        <Div fragment={true}>fakat:</Div>
        <Ul className="max-w-6xl mx-auto list-none">
          <Li fragment={true}>imagelarin paketlenmesi</Li>
          <Li fragment={true}>imagelarin dagitimi</Li>
          <Li fragment={true}>namespacelerin yonetilmesi</Li>
        </Ul>
        <Div fragment={true}>tarafinda kolayliklar sagliyor.</Div>
        <Note data-markdown>{notes}</Note>
      </Slide>
    </Fragment>
  )
}

const notes = `
Ne kadar buradaki hersey saf linux ile yapilabiliyor olsada bunlari elle yapmak buyuk zahmetti ve bundan sebeple son kullanici arasinda pek populer degildi.
<-next->
<-next->

Dockerin burada bize sagladi sey, bunlarin paketlenmesi icin yeni bir dil <-next->, dagitilmasi icin bir altyapi <-next->, ve namespacelerin yonetilmesi <-next-> icin bir command line interface ve markup configurasyonu yaratmak oldu.
<-next->
`

export default DockerSelf
