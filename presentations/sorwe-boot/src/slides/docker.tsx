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
Kabaca bir dockerin mantigindan bahsetmek gerekirse bu sistem iki seyin ustune kuruludur.
`

export default Docker
