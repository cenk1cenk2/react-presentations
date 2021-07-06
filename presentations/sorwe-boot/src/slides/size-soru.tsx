import { H2, H3, Li, Note, Slide, Ul } from '@cenk1cenk2-presentations/react-reveal-base'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'

const SizeBirSoru: React.FC = () => {
  return (
    <Fragment>
      <Slide>
        <H2>
          <FontAwesomeIcon icon={faQuestionCircle} />
        </H2>
        <H3>burada size ufak bir sorum var.</H3>
        <Ul className="max-w-6xl mx-auto list-none">
          <Li fragment={true}>environment ayarlari icin ne gibi bir library kullaniyorsunuz?</Li>
        </Ul>
        <Note data-markdown>{notes}</Note>
      </Slide>
    </Fragment>
  )
}

const notes = `
aklima gelmisken burada size ufak bir sorum olucak.

<-next->
- ne gibi bir environment variable librarysi kullaniyorsunuz. bu soru hem frontend hem backend icin gecerlidir fakat api adresini veya database adresini gibi seyleri yazilimin icine gecirmek icin suanda ne kullaniyorsunuz. suan hem icsel konfigurasyon hem environment variablelari desteklemekte midir?

Bu konuyu cozume ulastirdigimiza gore devam edersek...
`

export default SizeBirSoru
