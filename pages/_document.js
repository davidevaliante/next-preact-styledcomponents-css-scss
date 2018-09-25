import Document, { Head, Main, NextScript } from 'next/document'


// component opzionale, serve a definire l'head di base di ogni pagina
export default class MyDocument extends Document {

    render() {
        return (
            <html>
                <Head>
                    <link rel='stylesheet' href='/_next/static/style.css' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
