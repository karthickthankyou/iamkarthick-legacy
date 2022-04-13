/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import Cursor from 'src/components/atoms/Cursor'
import Layout from 'src/components/templates/Layout/Layout'
import { store } from 'src/store'
import create from 'zustand'
import '../globals.css'

// note the "<MyStore>" next to create
export type HoverTargetType = 'DEFAULT' | 'LINK' | 'IMAGE'
type MyStore = {
  show: boolean
  toggleShow: () => void
  hoverTargetType: HoverTargetType
  setHoverTargetType: (val: HoverTargetType) => void
}

export const useStore = create<MyStore>((set) => ({
  show: true,
  toggleShow: () => set((state) => ({ ...state, show: !state.show })),
  hoverTargetType: 'DEFAULT',
  setHoverTargetType: (val) =>
    set((state) => ({ ...state, hoverTargetType: val })),
}))

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Cursor />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
)

export default MyApp
