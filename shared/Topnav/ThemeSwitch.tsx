import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function ThemeSwitch({ isMobile = false }) {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <Image
                src='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=='
                width={36}
                height={36}
                sizes='36x36'
                alt='Loading Light/Dark Toggle'
                priority={false}
                title='Loading Light/Dark Toggle'
            />
        );
    }

    if (isMobile) {
        return (
            <div className='flex w-max items-center justify-between rounded-full border-2 border-solid border-primary-900 p-0.5 dark:border-primary-500'>
                <span className='mr-4 rounded-full bg-primary-500 p-[3px] dark:bg-primary-900'>
                    <Image
                        src={`/icons/${resolvedTheme === 'dark' ? 'sun' : 'sun_dark'}.svg`}
                        onClick={() => setTheme('light')}
                        width={25}
                        height={25}
                        alt='Switch to light mode'
                    />
                </span>
                <span className='rounded-full bg-primary-100 p-[3px] dark:bg-primary-500'>
                    <Image
                        src={`/icons/${resolvedTheme !== 'dark' ? 'moon_dark' : 'moon'}.svg`}
                        onClick={() => setTheme('dark')}
                        width={25}
                        height={25}
                        alt='Switch to dark mode'
                    />
                </span>
            </div>
        );
    }

    // if (resolvedTheme === 'dark') {
    //     return <Image src='/icons/sun.svg' onClick={() => setTheme('light')} width={25} height={25} alt='Switch to light mode' />;
    // }

    // if (resolvedTheme === 'light') {
    //     return <Image src='/icons/moon_dark.svg' onClick={() => setTheme('dark')} width={25} height={25} alt='Switch to dark mode' />;
    // }

    return (
        <>
            <Image
                src='/icons/sun.svg'
                onClick={() => setTheme('light')}
                width={25}
                height={25}
                alt='Switch to light mode'
                className='hidden dark:inline-block'
            />
            <Image src='/icons/moon_dark.svg' onClick={() => setTheme('dark')} width={25} height={25} alt='Switch to dark mode' className='dark:hidden' />
        </>
    );
}
