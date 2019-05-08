import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Footer from '../components/footer';

export default class Page extends Document {
  render() {
    return (
      <Html style={{ backgroundColor: '#128aa8' }}>
        <Head />
        <body className="antialiased overflow-y-scroll leading-normal">
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}
