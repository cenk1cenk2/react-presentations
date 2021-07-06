import React, { useContext } from 'react'

import { MakeProps, getClassNameProps } from './BaseComponent'
import { RevealContext } from './RevealProvider'

export interface CodeProps {
  children: { code: string }
  language?: string
  escape?: boolean
  lineNumbers?: string | true
  startLineNumbersAt?: number
  noTrim?: boolean
  autoAnimateId?: string
}

function getPrismClassName (prism: boolean | undefined, autoAnimateId: string | undefined, lineNumbers: string | true | undefined, language: string | undefined) {
  if (!prism) {
    return undefined
  }
  const lineNumberClassName = autoAnimateId || lineNumbers
  return `${`language-${language || 'none'}`}${lineNumberClassName ? ' line-numbers' : ''}` || undefined
}

const Code: React.FC<MakeProps<CodeProps, 'pre'>> = ({ id, children, language, escape, fragmentIndex, lineNumbers, startLineNumbersAt, noTrim, autoAnimateId, ...props }) => {
  const { prism } = useContext(RevealContext)
  const prismClassName = getPrismClassName(prism, autoAnimateId, lineNumbers, language)
  const fancyProps = getClassNameProps(props)
  const calculatedClassName: string | undefined = (fancyProps as any).className
  const className = calculatedClassName && prismClassName ? `${calculatedClassName} ${prismClassName}` : prismClassName
  return (
    <div className="max-w-4xl mx-auto">
      <pre
        {...fancyProps}
        className={className}
        data-id={autoAnimateId || id}
        id={id}
        data-fragment-index={fragmentIndex}
        data-line={typeof lineNumbers === 'string' ? lineNumbers : undefined}
        data-line-offset={startLineNumbersAt}
      >
        <code
          className={prism ? (language ? `language-${language}` : 'language-none') : language}
          data-noescape={!escape}
          data-trim={!noTrim}
          data-line-numbers={autoAnimateId ? lineNumbers || true : lineNumbers}
        >
          {children.code}
        </code>
      </pre>
    </div>
  )
}

export default Code
