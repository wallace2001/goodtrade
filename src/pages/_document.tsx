import Document, { Html, Main, Head, NextScript } from 'next/document';

export default class MyDocument extends Document{
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" /> 
                    <link rel="preconnect" href="https://fonts.gstatic.com" /> 
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}