import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { ReactNode } from "react";
import { ServerStyleSheet } from "styled-components";

interface AppDocmentProps {
  styleTags?: ReactNode;
}

class AppDocment extends Document<AppDocmentProps> {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet();

    context.renderPage((App) => (props) => {
      return sheet.collectStyles(<App {...props} />);
    });

    const props = await Document.getInitialProps(context);

    return {
      ...props,
      styleTags: sheet.getStyleElement(),
    };
  }

  render() {
    return (
      <Html lang="th">
        <Head />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href={`https://fonts.googleapis.com/css2?family=Kodchasan:wght@400;600&display=swap`}
          rel="stylesheet"
        />
        {this.props.styleTags}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocment;
