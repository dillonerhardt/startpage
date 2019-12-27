import { default as NextApp } from 'next/app'
import React from 'react'
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

const ScreenWrapper = styled.div`
  padding: 20px;
  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>Startpage</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ScreenWrapper>
          <Component {...pageProps} />
        </ScreenWrapper>
        <style jsx global>{`
          * {
            outline: none;
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
            color: #fff;
            background-color: rgb(32, 34, 36);
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
          }
        `}</style>
      </ThemeProvider>
    )
  }
}