import React from 'react'

import { MakeFullProps } from './BaseComponent'

export type NoteProps = MakeFullProps<'aside'>

const Note: React.FC<NoteProps> = (props) => {
  return <aside {...props} className="notes" />
}

export default Note
