import { Note, Slide } from '@cenk1cenk2-presentations/react-reveal-base'
import { faDocker } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'

const Docker: React.FC = () => {
  return (
    <Fragment>
      <Slide>
        <div className="mx-auto text-9xl">
          <FontAwesomeIcon icon={faDocker} />
        </div>
        <Note data-markdown>{notes}</Note>
      </Slide>
    </Fragment>
  )
}

const notes = `
Kabaca bir dockerin mantigindan bahsetmek gerekirse bu sistem iki seyin ustune kuruludur. Kabaca derken bu konuda ozellikle diger konuya gore biraz daha fazla detaya girecegim cunku acikasi alti bos sekilde birsey anlatmayi pek sevmiyorum. Fakat biz bunlari zaten biliyoruz dediginiz kisimlari her turlu gecmemiz mumkundur.
`

export default Docker
