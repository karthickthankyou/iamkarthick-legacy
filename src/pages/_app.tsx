/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import Layout from 'src/components/templates/Layout/Layout'
import { store } from 'src/store'
import create from 'zustand'
import '../globals.css'

// note the "<MyStore>" next to create
type MyStore = {
  show: boolean
  toggleShow: () => void
}

export const useStore = create<MyStore>((set) => ({
  show: true,
  toggleShow: () => set((state) => ({ show: !state.show })),
}))

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
)

export default MyApp
