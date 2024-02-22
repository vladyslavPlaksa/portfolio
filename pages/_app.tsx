import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <NextIntlClientProvider messages={pageProps.messages} locale={router.locale} timeZone='Europe/Warsaw'>
                <Component {...pageProps} />
            </NextIntlClientProvider>
        </ThemeProvider>
    );
}
