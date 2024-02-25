import { useTranslations } from 'next-intl';

export default function HeroSection() {
    const t = useTranslations('Hero');

    return (
        <div className='px-3 pt-[150px] text-center sm:px-10 sm:text-right'>
            <h1 className='font-michroma text-[70px] sm:text-[120px] md:text-[160px] lg:text-[200px]'>{t(`title`)}</h1>
            <p className='font-michroma text-xl md:text-[30px] md:leading-8 lg:text-[45px] lg:leading-[50px]'>{t(`subtitle`)}</p>
        </div>
    );
}
