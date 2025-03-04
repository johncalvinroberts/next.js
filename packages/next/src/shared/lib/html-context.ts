import type { BuildManifest } from '../../server/get-page-files'
import type { ServerRuntime } from 'next/types'
import type { NEXT_DATA } from './utils'
import type { FontConfig } from '../../server/font-utils'
import type { NextFontManifest } from '../../build/webpack/plugins/next-font-manifest-plugin'

import { createContext } from 'react'

export type HtmlProps = {
  __NEXT_DATA__: NEXT_DATA
  strictNextHead: boolean
  dangerousAsPath: string
  docComponentsRendered: {
    Html?: boolean
    Main?: boolean
    Head?: boolean
    NextScript?: boolean
  }
  buildManifest: BuildManifest
  ampPath: string
  inAmpMode: boolean
  hybridAmp: boolean
  isDevelopment: boolean
  dynamicImports: string[]
  assetPrefix?: string
  canonicalBase: string
  headTags: any[]
  unstable_runtimeJS?: false
  unstable_JsPreload?: false
  devOnlyCacheBusterQueryString: string
  scriptLoader: {
    afterInteractive?: string[]
    beforeInteractive?: any[]
    worker?: any[]
  }
  locale?: string
  disableOptimizedLoading?: boolean
  styles?: React.ReactElement[] | React.ReactFragment
  head?: Array<JSX.Element | null>
  crossOrigin?: 'anonymous' | 'use-credentials' | '' | undefined
  optimizeCss?: any
  optimizeFonts?: FontConfig
  nextConfigOutput?: 'standalone' | 'export'
  nextScriptWorkers?: boolean
  runtime?: ServerRuntime
  hasConcurrentFeatures?: boolean
  largePageDataBytes?: number
  nextFontManifest?: NextFontManifest
}

export const HtmlContext = createContext<HtmlProps>(null as any)
if (process.env.NODE_ENV !== 'production') {
  HtmlContext.displayName = 'HtmlContext'
}
