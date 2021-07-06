import { H2, Note, Slide, Div, Link } from '@cenk1cenk2-presentations/react-reveal-base'
import { Fragment } from 'react'

const Ben: React.FC = () => {
  return (
    <Fragment>
      <Slide>
        <H2 className="mx-auto">ben kimim?</H2>
        <Div fragment={true}>
          <Link href="https://cenk.kilic.dev" target="_blank">
            cenk.kilic.dev
          </Link>
        </Div>
        <Note data-markdown>{notes}</Note>
      </Slide>
    </Fragment>
  )
}

const notes = `
Oncelikle herseye baslamadan once bu adam nerden cikti dememeniz icin kisaca ben kimim ondan bahsedeyim.

- ben cenk
- kisa bir suredir viyanada ikamet ediyorum.
- buraya geldigimde is kolumu degistirip daha sevdigim birsey uzerine yonelmek icin sadece programcilik uzerine is aramaya basladim. cok uzun zamandir, tam olarak kucuklukten beri denilecek sekilde irili ufakli zaten bu islerle ugrasiyordum.
- genel olarak suan tam zamanli calistigim sirkette backend developer olarak gecsemde developer operations hatta ne denk gelirse yapiyorum. ama genelde alt yapi calismalari uzerine yogunlasmis durumdayim.
- en can alici noktasi da suan calistigim yerde genel olarak kendim birseyler uzerinde calistigim icin, ne kadar sizinle part-time olarak calissamda bana her saate ulasmaniz mumkun olacaktir.

<-next->
asagidaki linktende bir haftasonu gaza gelip yaptigim websitesi muhtemelen kendimi suan anlatmaya calistigimdan daha iyi bir sekilde anlatacaktir.
`

export default Ben
