import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Contact() {
    const t = useTranslations('Contact');

    const contactConfig = [
        {
            title: t('links.github.title'),
            icon: t('links.github.alt').toLowerCase(),
            alt: t('links.github.alt'),
            href: t('links.github.href'),
        },
        {
            title: t('links.linkedin.title'),
            icon: t('links.linkedin.alt').toLowerCase(),
            alt: t('links.linkedin.alt'),
            href: t('links.linkedin.href'),
        },
        {
            title: t('links.email.title'),
            icon: t('links.email.icon'),
            alt: t('links.email.alt'),
            href: t('links.email.href'),
        },
    ];
    return (
        <div className='px-10 pt-[100px] sm:px-16 md:px-20 lg:px-28' id='contact'>
            <h2 className='font-michroma text-2xl text-secondary-pink sm:text-3xl md:text-4xl dark:text-secondary-green'>{t('title')}</h2>
            <div className='flex flex-col gap-y-3 pt-7'>
                {contactConfig.map(item => (
                    <div className='flex w-max items-center justify-between gap-5' key={item.alt}>
                        <span>
                            <Image src={`/icons/${item.icon}_dark.svg`} alt={`${item.alt}`} width={40} height={40} className='dark:hidden' />
                            <Image src={`/icons/${item.icon}.svg`} alt={`${item.alt}`} width={40} height={40} className='hidden dark:inline' />
                        </span>
                        <a href={item.href} target='_blank' rel='noreferrer' className='link flex items-start text-xl'>
                            {item.title}
                            <Image src='/icons/go_to_dark.svg' alt='External Link' width={10} height={10} className='ml-0.5 inline dark:hidden' />
                            <Image src='/icons/go_to.svg' alt='External Link' width={10} height={10} className='ml-0.5 hidden dark:inline' />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
