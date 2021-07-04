/* !
 * revealjs-react 1.0.0
 * MIT licensed
 *
 * Copyright (C) 2020 Blake Nedved, https://blakeanedved.github.io/
 */
// eslint-disable-next-line import/no-duplicates
import type Reveal from '../types/reveal.js'
import type {
  ExtractPluginExtraConfig,
  FragmentTransitions,
  RevealConfig,
  RevealNavigate,
  RevealPlugin,
  RevealPluginDefinition,
  RevealPluginList,
  RevealPlugins,
  RevealRoutes,
  RevealSlideCoordinates,
  RevealSlideSize
  // eslint-disable-next-line import/no-duplicates
} from '../types/reveal.js'
import type { AudioProps } from './components/Audio'
import Audio from './components/Audio'
import type { CodeProps } from './components/Code'
import Code from './components/Code'
import type { FragmentProps } from './components/Fragment'
import Fragment from './components/Fragment'
import type { IFrameProps } from './components/Iframe'
import IFrame from './components/Iframe'
import type { ImageProps } from './components/Image'
import Image from './components/Image'
import type { LinkProps } from './components/Link'
import Link from './components/Link'
import type { NoteProps } from './components/Note'
import Note from './components/Note'
import type { RevealJSProps } from './components/RevealJS'
import RevealJS from './components/RevealJS'
import { RevealContext } from './components/RevealProvider'
import type {
  BlockQuoteProps,
  DivProps,
  FigCaptionProps,
  FigureProps,
  FooterProps,
  HeaderProps,
  HProps,
  LiProps,
  MainProps,
  OlProps,
  PProps,
  SpanProps,
  UlProps
} from './components/SimpleComponents'
import {
  BlockQuote, Div, FigCaption, Figure, Footer, H1, H2, H3, H4, H5, H6, Header, Li, Main, Ol, P, Span, Ul
} from './components/SimpleComponents'
import type { SlideProps } from './components/Slide'
import Slide from './components/Slide'
import type { VideoProps } from './components/Video'
import Video from './components/Video'
// hooks
import useReveal from './hooks/useReveal'
// plugins
import UntypedHighlightPlugin, { HighlightOptions } from './plugins/HighlightPlugin'
import UntypedMarkdownPlugin from './plugins/MarkdownPlugin'
import UntypedMathPlugin from './plugins/MathPlugin'
import UntypedNotesPlugin from './plugins/NotesPlugin'
import type { CustomPrismHighlightPlugin, PrismLanguages, PrismOptions, PrismPlugins, PrismThemes } from './plugins/PrismHighlightPlugin'
import PrismHighlightPlugin, { addCustomPrismLanguage, enablePrismLineNumbers } from './plugins/PrismHighlightPlugin'
import UntypedSearchPlugin from './plugins/SearchPlugin'
import UntypedZoomPlugin from './plugins/ZoomPlugin'

// types for reveal.js

const HighlightPlugin: RevealPlugin<HighlightOptions> = UntypedHighlightPlugin
const MathPlugin: RevealPlugin = UntypedMathPlugin
const MarkdownPlugin: RevealPlugin = UntypedMarkdownPlugin
const NotesPlugin: RevealPlugin = UntypedNotesPlugin
const SearchPlugin: RevealPlugin = UntypedSearchPlugin
const ZoomPlugin: RevealPlugin = UntypedZoomPlugin

export {
  enablePrismLineNumbers,
  useReveal,
  RevealContext,
  Audio,
  BlockQuote,
  Code,
  Div,
  FigCaption,
  Figure,
  Footer,
  Fragment,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Header,
  IFrame,
  Image,
  Li,
  Link,
  Main,
  Note,
  Ol,
  P,
  RevealJS,
  Slide,
  Span,
  Ul,
  Video,
  addCustomPrismLanguage,
  PrismHighlightPlugin,
  HighlightPlugin,
  MathPlugin,
  MarkdownPlugin,
  SearchPlugin,
  ZoomPlugin,
  NotesPlugin
}
export type {
  PrismLanguages,
  PrismPlugins,
  PrismThemes,
  CustomPrismHighlightPlugin,
  RevealPlugin,
  RevealPluginDefinition,
  RevealPlugins,
  RevealPluginList,
  Reveal,
  RevealConfig,
  RevealNavigate,
  RevealRoutes,
  RevealSlideCoordinates,
  RevealSlideSize,
  FragmentTransitions,
  HighlightOptions,
  PrismOptions,
  ExtractPluginExtraConfig,
  AudioProps,
  BlockQuoteProps,
  CodeProps,
  DivProps,
  FigCaptionProps,
  FigureProps,
  FooterProps,
  FragmentProps,
  HProps,
  HeaderProps,
  IFrameProps,
  ImageProps,
  LiProps,
  LinkProps,
  MainProps,
  NoteProps,
  OlProps,
  PProps,
  RevealJSProps,
  SlideProps,
  SpanProps,
  UlProps,
  VideoProps
}
