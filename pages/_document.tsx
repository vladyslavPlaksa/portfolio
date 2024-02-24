import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en' suppressHydrationWarning>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link href='https://fonts.googleapis.com/css2?family=Michroma&display=swap' rel='stylesheet' />
            </Head>
            <body className='bg-primary-100 text-tertiary dark:bg-primary-900 dark:text-primary-500'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
