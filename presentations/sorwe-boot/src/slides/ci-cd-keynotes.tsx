import { faJenkins } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'

import { H2, H3, Li, Note, Slide, Ul } from '@cenk1cenk2-presentations/react-reveal-base'

const CiCdKeynotes: React.FC = () => {
  return (
    <Fragment>
      <Slide>
        <H2>
          <FontAwesomeIcon icon={faJenkins} />
        </H2>
        <H3>nelere dikkat etmemiz gerekli?</H3>
        <Ul className="mx-auto max-w-6xl list-none">
          <Li fragment={true}>branching</Li>
          <Li fragment={true}>branch protection</Li>
          <Li fragment={true}>deployment</Li>
        </Ul>
        <Note data-markdown>{notes}</Note>
      </Slide>
    </Fragment>
  )
}

const notes = `
gene ayni sekilde bununla beraber birkac degisiklik hayatimiza karisicak.

<-next->
- bu konuda en onemli olan nokta branching olmali. branchlerimizi once bir issue olusturarak ve o issuenun numarasiyla acarsak takip etmesi hepimiz acisindan daha kolay olur.
- master branchine direk olarak commit yapmayi kapatabiliriz. boylece sadece pull requestlerle ilerleyebiliriz. bu da ci/cd eger basarisiz olursa merge etmeyi engelleyerek kotu kodun repositorye karismasini engelleyecektir.
- ilerde birden cok server yapisina gecersek ki bu test, stage ve production icin olacaktir, taglari productiona targetleyip, prerelease taglari stage serverina, masterida test serverina baglayabiliriz. boylece cevremize gore dogru environment variablelari programin icine inject ederek yada frontend icin beklenen environment variablellarla build ederek farkli targetlerin urlrini, database ayarlarini vs dogru sekilde o cevreye gore yapicaktir.
`

export default CiCdKeynotes
