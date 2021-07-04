import { SVGAttributes, ClassAttributes, Attributes, DOMAttributes } from 'react'
import styledImport, { CSSProp, css as cssImport } from 'styled-components'

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
}

declare module 'react' {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp
  }
  // The inline svg css prop
  interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
    css?: CSSProp
  }
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes extends Attributes {
      as?: string
    }
  }
}
