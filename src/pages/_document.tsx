import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class TheDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <div className="app">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

export default TheDocument;
