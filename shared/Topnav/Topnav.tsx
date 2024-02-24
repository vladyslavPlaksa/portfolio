import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { smoothScroll } from '@/utils/smoothScrollTo';

import LocaleSwitch from './LocaleSwitch';
import ThemeSwitch from './ThemeSwitch';
interface NavItem {
    label: string;
    href: string;
}

export default function Topnav() {
    const t = useTranslations('TopNav');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navConfig: NavItem[] = [
        // { label: 'Home', href: '#home' },
        { label: `${t(`links.About.title`)}`, href: `${t(`links.About.url`)}` },
        { label: `${t(`links.Skills.title`)}`, href: `${t(`links.Skills.url`)}` },
        { label: `${t(`links.Contact.title`)}`, href: `${t(`links.Contact.url`)}` },
    ];

    return (
        <nav
            className={`flex min-h-[95px] w-full items-center justify-center px-10 py-5 text-xl sm:px-16 sm:py-5 ${isMenuOpen && 'bg-primary-100 dark:bg-primary-900'}`}
        >
            <div className='flex w-full justify-between sm:max-w-screen-sm lg:max-w-screen-xl '>
                <div className='flex w-full items-center justify-between sm:justify-normal'>
                    {/* Logo */}
                    <Link href='#home' onClick={event => smoothScroll('#home', event)}>
                        <Image src='/logo.png' alt='logo' width={70} height={50} className='mr-4 hidden dark:block' />
                        <Image src='/logo_dark.png' alt='logo' width={70} height={50} className='mr-4 dark:hidden' />
                    </Link>

                    {/* Navigation Links */}
                    <div className='hidden h-full items-end justify-center sm:flex'>
                        {navConfig.map(navItem => (
                            <Link href={navItem.href} key={navItem.href} className='link mx-2' onClick={event => smoothScroll(navItem.href, event)}>
                                {navItem.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsMenuOpen(prev => !prev)} className='sm:hidden'>
                        <Image
                            src={`/icons/menu_dark.svg`}
                            alt='menu'
                            width={40}
                            height={40}
                            className={`${isMenuOpen && 'rotate-90 bg-primary-300'} rounded transition duration-300 ease-in-out dark:hidden`}
                        />
                        <Image
                            src={`/icons/menu.svg`}
                            alt='menu'
                            width={40}
                            height={40}
                            className={`${isMenuOpen && 'rotate-90 bg-primary-700'} hidden rounded transition duration-300 ease-in-out dark:block`}
                        />
                    </button>
                </div>

                {/* Change Theme and Language */}
                <div className='hidden items-end gap-2 sm:flex'>
                    <ThemeSwitch />
                    <LocaleSwitch />
                </div>
            </div>
            {/* Dropdown menu */}
            <div
                className={`absolut transition-max-height absolute left-0 top-[95px] w-full bg-primary-100 duration-300  ease-in-out sm:hidden dark:bg-primary-900 ${isMenuOpen ? 'h-screen' : 'h-0 overflow-hidden'}`}
            >
                <ul className='mt-3'>
                    {navConfig.map(navItem => (
                        <li key={navItem.href} className='text-xl'>
                            <Link
                                href={navItem.href}
                                onClick={event => {
                                    smoothScroll(navItem.href, event);
                                    setIsMenuOpen(false);
                                }}
                            >
                                <span className='block px-4 py-2 hover:bg-primary-300 dark:hover:bg-primary-700'>{navItem.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='ml-3 mt-4 flex w-32 items-center justify-between gap-2'>
                    <ThemeSwitch isMobile={true} />
                    <LocaleSwitch />
                </div>
            </div>
        </nav>
    );
}
