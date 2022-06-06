import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'

import { H2, H3, Li, Note, Slide, Ul } from '@cenk1cenk2-presentations/react-reveal-base'

const WhatsNext: React.FC = () => {
  return (
    <Fragment>
      <Slide>
        <H2>
          <FontAwesomeIcon icon={faCalendar} />
        </H2>
        <H3>bu donusum nasil ilerleyecek?</H3>
        <Ul className="max-w-6xl mx-auto list-none">
          <Li fragment={true}>ci/cd kurulumu</Li>
          <Li fragment={true}>docker containerlarin yaratilmasi</Li>
          <Li fragment={true}>mevcut serverli yapiya yavas yavas entegre edilmesi (docker-compose)</Li>
          <Li fragment={true}>gelistirmenin docker yapisina gecmesi</Li>
          <Li fragment={true}>kubernetes/serverless yapiya gecilmesi</Li>
          <Li fragment={true}>izleme araclarinin kurulumu</Li>
        </Ul>
        <Note data-markdown>{notes}</Note>
      </Slide>
    </Fragment>
  )
}

const notes = `
tabi bu donusumun ilerleme sureci asagi yukari su sekilde olacaktir.

<-next->
- oncelikle ci/cdyi kurup rewritei yapilan paketleri yavas yavas bu yapiya adapte edecegiz.
- bu isin diger koluda docker containerlarin yaratilmasi ve deploymenta hazir hale getirilmesi.
- basta ansible ile bunlari docker-compose ile bir araya getirip nginx ve haproxy ile reverse proxyliyerek disari acik hale getirecegiz ve her tekrardan yazilan servis docker alt yapisinda olucak.
- bu arada bir yerde gelistirmeyi de docker icine tasirsak faydasi olacagini dusunuyorum bahsettigim gibi.
- suan kesin olarak belli olmayan cloudless providera gecisimizde muhtemelen ansiblei birakip terraforma gecerek elimizdeki containerlari oraya tasiyacagiz. tabi bu surecte ortak dosya deploma alanlarimiz gibi alanlarimizi onceden ayarlarak alt yapi hazirligi yapmamiz gerekecek. bundan sonra scaling gerektikce bunlari yavas yavas kubernetes alt yapisina kaydiracagiz. fakat bunun direk olmamasinin en buyuk sebebi kullanacagimiz alt yapinin bu konfigurasyona cok etkisi olmasi sebebiyledir.
- muhtemelen de duruma gore bunlara phrometus veya elk stack gibi bir monitorleme sistemi kurarak sistemlerin izlenmesi loglarin toplanmasi gibi isleri merkezi alandan yapip, gereken scalingleri kestirebilmek icin data toplayacagiz.
`

export default WhatsNext
