import { faDocker } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'

import { H2, H3, Li, Note, Slide, Ul } from '@cenk1cenk2-presentations/react-reveal-base'

const DockerKeynotes: React.FC = () => {
  return (
    <Fragment>
      <Slide>
        <H2>
          <FontAwesomeIcon icon={faDocker} />
        </H2>
        <H3>nelere dikkat etmemiz gerekli?</H3>
        <Ul className="max-w-6xl mx-auto list-none">
          <Li fragment={true}>container kapali bir kutudur.</Li>
          <Li fragment={true}>container localhostu containera localhosttur.</Li>
          <Li fragment={true}>containerlar disariya kapali olarak dogar.</Li>
          <Li fragment={true}>containera icinden ve disaridan erisebilecegimiz kaynaklar farklidir.</Li>
          <Li fragment={true}>bizim durumumuzda containerlar stateless yapiyi sever.</Li>
        </Ul>
        <Note data-markdown>{notes}</Note>
      </Slide>
    </Fragment>
  )
}

const notes = `
bu konuyla ilgili son olarakda bu donusum surecinde sizlerin hayatimizda nelerin degisecegi ve nelere dikkat etmemiz gerekli oldugu.

<-next->
- container paketlendigi zaman kapali bir kutudur. en basitinden degisen dosyalari saklamamiz icin host makineye veya bir ag sunucusu yada s3 uzerinden containera bir volume takmamiz gerekir. eger degisen dosyalar containerin disariya olan bir iliskisiyle baglanmamissa, uzun vadeli olarak uzerinde durmaz ve image yenilendiginde yada yeniden baslatildiginda hersey gider.
- son maddede ise containerlar kendi icinde bir networkde bagli olsada her containerin localhostu kendisidir. eger diyelim bir api containerindan bir database e erismeye calisiyorsak, ve hatta o databasein disari olan portu expose olsa bile, api containerdan localhost dediginizde o localhost api containeridir. database e erismek icin onun container ismini vermemiz gerekir. bunu soylemem sacma gelebilir fakat bunun uzerinde bir kac kere bir kac saat harcayan birden fazla kisi gorudugum icin gene de tekrar etmek istedim.
- yarattigimiz containerlar disariya kapali olarak dogar, biz bunlari gerekli gordugumuz sekilde disariya acariz. ideal bir ortamda container root useri kullanmiyorsa kod disari cikamaz ve ayni zamanda cogu linux system yeteneklerindende eksik bir sekilde dogarlar.
- onemli noktalardan biri de containerlarin icinden ve disaridan erisebilecegimiz kisimlar limitlidir. mesala diyelim bir databasei seedlemek istiyoruz ve bu servisimiz databasei ile birlikte bir docker-compose yapisinin icerisinde. eger gidip disaridan bu scriptimizi calistirip database e erismeye calisirsak o docker networkinin namespaceinda kalacagi icin baglanti kuramicaktir. bunun icin containerin shelline dusup oradan bu islemi gerceklestirmemiz gerekir. tabi ufak scriptlerle bu isler kolaylastiriyorlar onun icin bu tarz seyler cok buyuk dert olmamaktadir.
- bu madde ozellikle, scaling yapacagimiz icin dogrudur cunku kullanici istekleri birden fazla containera gidecegi icin, api ne kadar stateless bir sekilde cevap verebilirse yani arada gecen islemlerin her zaman ortak database e yada dosya sistemine gitmesi farkli containerlara ulasmasi sebebiyle olusacak problemleri engelleyecektir.
`

export default DockerKeynotes
