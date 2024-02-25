import { useTranslations } from 'next-intl';

export default function AboutMe() {
    const t = useTranslations('About');

    return (
        <div className='px-10 pt-[100px] sm:px-16 md:px-20 lg:px-28' id='about'>
            <h2 className='font-michroma text-2xl text-secondary-pink sm:text-3xl md:text-4xl dark:text-secondary-green'>{t(`title`)}</h2>
            <p className='max-w-6xl pt-5 text-lg sm:text-xl md:text-2xl'>{t(`text`)}</p>
        </div>
    );
}
