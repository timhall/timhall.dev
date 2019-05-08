import React from 'react';
import App, { Container } from 'next/app';
import '../styles/index.css';

export default class Layout extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
