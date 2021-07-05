import sorweLogo from '@assets/sorwe-logo.png'
import { H1, Image, Note, Slide } from '@cenk1cenk2-presentations/react-reveal-base'
import { Fragment } from 'react'

const Greetings: React.FC = () => {
  return (
    <Fragment>
      <Slide>
        <div className="grid grid-cols-3">
          <div className="max-w-lg bg-gray-900 border-4 border-primary-700 shadow-2xl rounded-3xl rounded-l-none border-l-0 grid-span-1">
            <Image src={sorweLogo} />
          </div>
          <H1 className="mx-auto self-center grid-span-2">developer operations</H1>
        </div>
        <Note data-markdown>{notes}</Note>
      </Slide>
    </Fragment>
  )
}

const notes = `
Herkese merhabalar ben Cenk,

Bugun onumuzdeki ay icinde baslayacagimiz otomasyon sureciyle sirket ve sizler acisindan neler degisecek bizlere neler katicak, nelere dikkat etmemiz gerekli gibi konulari konusacagiz ve bu vasitayla ben de sizinle tanismis olacagim.

Sizden ricam gerekli gordugunuz yerlerde beni durdurup aklinizdakileri sorabilirseniz, hem bu sunum en iyi sekilde gececektir hemde benim de sizi tanimam acisindan cok yararli olacaktir.
`

export default Greetings
