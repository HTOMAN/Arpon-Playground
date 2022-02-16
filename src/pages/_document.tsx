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
            <div className="app-in">
              <Main />
            </div>
          </div>
          <NextScript />
          <script src="https://rawgit.com/gss/engine/2.1.x/dist/gss.js"></script>
          <script type="text/javascript">window.engine = new GSS(document, null);</script>
        </body>
      </Html>
    );
  }
}

export default TheDocument;
