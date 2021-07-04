import React from 'react'

import { MakeProps, getClassNameProps } from './BaseComponent'

export interface ImageProps {
  alt?: string
  height?: number
  width?: number
  src: string
  autoAnimateId?: string
}

const Image: React.FC<MakeProps<ImageProps, 'img'>> = ({ autoAnimateId, alt, fragmentIndex, height, src, width, ...props }) => {
  return <img {...getClassNameProps(props)} data-id={autoAnimateId} src={src} alt={alt} width={width} height={height} data-fragment-index={fragmentIndex} />
}

export default Image
