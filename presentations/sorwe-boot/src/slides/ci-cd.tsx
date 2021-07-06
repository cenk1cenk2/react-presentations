import ciCd from '@assets/ci-cd.png'
import { Note, Slide, Image } from '@cenk1cenk2-presentations/react-reveal-base'
import { faJenkins } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'

const CiCd: React.FC = () => {
  return (
    <Fragment>
      <Slide>
        <div className="mx-auto text-9xl">
          <FontAwesomeIcon icon={faJenkins} />
        </div>
        <Image src={ciCd} className="border-4 border-gray-700 shadow-lg" />
        <Note data-markdown>{notes}</Note>
      </Slide>
    </Fragment>
  )
}

const notes = `
Bu isin ikinci adimi olarakta ci/cd kurarak eger linting veya codestyle kontrolleriniz varsa, rewrite ile gelecek testler, build process vs. commit yaptiginiz branche gore bu onceden tanimlanmis islerimiz calisacak ve sonuc olarak hatalarin onune gecicegiz.

Bunun icin bir cok alternatif olsada jenkins kullanmayi dusunuyoruz.

Bizim icin en onemli kismi belli branche yada taga commit yapildiginda containerda ayni sekilde build edilecek ve o taga yada branche gore elimizde dagitabilcegimiz bir versiyonumuz olacaktir.

Bu adimlarindan biri basarisiz oldugunda, sonraki buna bagli islemler yapilmayacak ve bir hata oldugunuzdan haberiniz olucak.
`

export default CiCd
