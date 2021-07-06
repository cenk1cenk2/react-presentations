import sorweLogo from '@assets/sorwe-logo.png'
import { H2, Image, Note, Slide } from '@cenk1cenk2-presentations/react-reveal-base'
import { Fragment } from 'react'

const Last: React.FC = () => {
  return (
    <Fragment>
      <Slide>
        <div className="grid grid-cols-3">
          <div className="max-w-lg bg-gray-900 border-4 border-primary-700 shadow-2xl rounded-3xl rounded-l-none border-l-0 grid-span-1">
            <Image src={sorweLogo} />
          </div>
          <H2 className="mx-auto self-center grid-span-2">Beni dinlediğiniz için teşekkür ederim.</H2>
        </div>
        <Note data-markdown>{notes}</Note>
      </Slide>
    </Fragment>
  )
}

const notes = `
Oncelikle beni dinlediginiz icin tesekkur ederim.

Dedigim gibi slack uzerinden haberlesiyormusunuz bir probleminiz veya bir sorunuz oldugu zaman hic cekinmeden tarafima ulasabilirsiniz.

Zamanla elimizdeki bu sorular biriktikce sik gelenleri veya aklima gelenleri bir wiki haline getirip gene bir websitesinde tutacagim. Bu hem herkes icin daha olacaktir, hem de ekip buyudugu zaman ilerde hersey hali hazirda yazili olacagi icin hepimize zaman kazandiracaktir.

Tekrardan tesekkur ediyorum, beni dinlediginiz icin, bunun disinda akliniza gelen birseyler varsa lutfen sormaktan cekinmeyiniz, bunun disinda bir demo olarak gostermem istediginiz bir adim veya aklinizda kalan birsey varsa lutfen onlari da gostermekten mutluluk duyarim.
`

export default Last
