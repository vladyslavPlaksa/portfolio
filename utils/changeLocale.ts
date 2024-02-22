import { NextRouter } from 'next/router';

export const changeLocale = (router: NextRouter) => {
    const lang = router.locale === 'en' ? 'pl' : 'en';

    router.push(`/${lang}`, `/${lang}`, { locale: lang });
};
