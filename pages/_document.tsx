import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en' suppressHydrationWarning>
            <Head />
            <body className='bg-primary-100 text-tertiary dark:bg-primary-900 dark:text-primary-500'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
