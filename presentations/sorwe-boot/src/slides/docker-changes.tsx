import { faDocker } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'

import { H2, H3, Li, Note, Slide, Ul } from '@cenk1cenk2-presentations/react-reveal-base'

const DockerChanges: React.FC = () => {
  return (
    <Fragment>
      <Slide>
        <H2>
          <FontAwesomeIcon icon={faDocker} />
        </H2>
        <H3>neden?</H3>
        <Ul className="mx-auto max-w-6xl list-none">
          <Li fragment={true}>yazilan kod versiyonlanarak paketlenecek</Li>
          <Li fragment={true}>yerel ortamda her zaman calisan clonelar</Li>
          <Li fragment={true}>version farklarindan olusan problemlerin onune gecilmesi</Li>
          <Li fragment={true}>dagitim alaninda olceklenebilirlik</Li>
        </Ul>
        <Note data-markdown>{notes}</Note>
      </Slide>
    </Fragment>
  )
}

const notes = `
peki donusumle neden ugrasmamiz gerekir.

<-next->
- yazilan kod ci/cd adimlarindan sonra versiyonlanarak paketlenecek ve deploymenta hazir hale gelicek. bu konu uzerinde birazdan duracagimiz icin cok acmiyorum.
- ilerde ekip genislediginde kendi bilgisayariniza yardimci servisleri kurmak ve ayarlamak icin ugrasmayip veya test serverindan data cekmek icin ugrasmayip, tek yapmak gereken sey docker-compose a containerlarini calistirmasini soylemek olucak.
- bunun disinda benim en sevdigim sorun olan, bu localde calisiyor serverda ne problem var sorusu. bunun onune gecmek icin versiyon veya konfigurasyon farklarindan olusan sorunlari sifira indirgemek.
- ve en onemli olan dagitim alaninda olceklenebilirlik, bu containerlarimizi birden fazla kere calistirarak servislerimizde yuk dagilimi yapabilmek. ayni zamanda gecilmeyi dusunen cloud provider, kubernetes alt yapisi docker containerlari birinci sinif vatandas olarak gordugu icin bu containerlara her turlu ihtiyacimiz var.
`

export default DockerChanges
