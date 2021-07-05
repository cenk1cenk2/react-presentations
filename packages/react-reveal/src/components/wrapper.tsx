import { enablePrismLineNumbers, useReveal } from '@cenk1cenk2-presentations/react-reveal-base'
import overlay from '@cenk1cenk2-presentations/react-reveal/assets/images/overlay.png'
import consola from 'consola'
import { Fragment, useEffect, useState } from 'react'
import { createGlobalStyle, css } from 'styled-components'

export interface WrapperProps {
  overlay?: boolean | 'firstAndLast'
}

export const Wrapper: React.FC<WrapperProps> = (props) => {
  const { reveal } = useReveal()

  const [ activeOverlay, setActiveOverlay ] = useState(false)

  useEffect(() => {
    if (!reveal) {
      consola.warn('Reveal.js is not ready yet.')

      return
    }

    consola.info('Enabling prism line numbers.')
    enablePrismLineNumbers()

    if (props.overlay === 'firstAndLast') {
      consola.info('Overlay active for first and last slide.')

      setActiveOverlay(reveal.isFirstSlide() || reveal.isLastSlide())

      reveal.on('slidechanged', () => {
        setActiveOverlay(reveal.isFirstSlide() || reveal.isLastSlide())
      })
    } else if (props.overlay === true) {
      consola.info('Overlay is always active.')

      setActiveOverlay(true)
    } else {
      consola.info('No overlay is active.')
    }

    consola.info('Reveal.js is ready.')
  }, [ reveal ])

  return <Fragment>{activeOverlay && <OverlayStyle />}</Fragment>
}

export const OverlayStyle = createGlobalStyle(
  () => css`
    .reveal.slide {
      background: url(${overlay}) no-repeat center center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${overlay}', sizingMethod='scale');
      -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${overlay}', sizingMethod='scale');
    }
  `
)
