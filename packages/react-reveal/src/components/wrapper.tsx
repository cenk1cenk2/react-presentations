import { enablePrismLineNumbers, useReveal } from '@cenk1cenk2-presentations/react-reveal-base'
import consola from 'consola'
import { Fragment, useEffect } from 'react'

export const Wrapper: React.FC = () => {
  const { reveal } = useReveal()

  useEffect(() => {
    if (!reveal) {
      consola.warn('Reveal.js is not ready yet.')

      return
    }

    enablePrismLineNumbers()

    consola.info('Reveal.js is ready.')
  }, [ reveal ])

  return <Fragment />
}
