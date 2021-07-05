import React from 'react'

import { MakeProps, getClassNameProps } from './BaseComponent'

export interface MarkdownSlideProps {
  file: string
  separator?: string
  verticalSeparator?: string
  notesSeparator?: string
  charset?: string
}

const MarkdownSlide: React.FC<MakeProps<MarkdownSlideProps, 'section'>> = ({ file,
  separator = '^\n\n\n',
  verticalSeparator = '^\n\n',
  notesSeparator = '^Note:',
  charset = 'iso-8859-15',
  fragmentIndex,
  ...props }) => {
  return (
    <section
      {...getClassNameProps(props)}
      data-markdown={file}
      data-separator={separator}
      data-separator-vertical={verticalSeparator}
      data-separator-notes={notesSeparator}
      data-charset={charset}
    />
  )
}

export default MarkdownSlide
