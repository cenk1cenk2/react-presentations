import { RevealPlugin } from '../../'

export interface HighlightOptions {
  highlight?: {
    highlightOnLoad?: boolean
    escapeHTML?: boolean
  }
}

declare const HighlightPlugin: RevealPlugin<HighlightOptions>

export default HighlightPlugin
