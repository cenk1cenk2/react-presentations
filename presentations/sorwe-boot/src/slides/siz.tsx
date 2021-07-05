import { H2, Li, Note, Slide, Ul } from '@cenk1cenk2-presentations/react-reveal-base'
import { faDocker, faJenkins } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'

const Siz: React.FC = () => {
  return (
    <Fragment>
      <Slide>
        <H2 className="mx-auto">sizin hakkınızda</H2>
        <Ul className="max-w-6xl mx-auto">
          <Li fragment={true}>
            <FontAwesomeIcon icon={faDocker} /> daha önceden docker ile çalıştınız mı?
          </Li>
          <Li fragment={true}>
            <FontAwesomeIcon icon={faJenkins} /> daha önceden continuous integration / continuous deployment ile çalıştınız mı?
          </Li>
        </Ul>
        <Note data-markdown>{notes}</Note>
      </Slide>
    </Fragment>
  )
}

const notes = `
sizin hakkinizda edinmek istedigim ufak bilgi niteliginde sorularim var, affiniza siginarak bunlari size soruyorum.

ilki daha onceden docker ile calistiniz mi ve containerlama hakkinda ne kadar bilginiz var?

ve ikincisi de ci/cd ile calisma firsatiniz olup olmadigi?

Tabi ben sunumu onceden hazirladigim icin cevap ne olursa olsun ikisininde uzerinden hizlica gecmek istiyorum.
`

export default Siz
