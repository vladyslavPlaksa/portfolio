import Image from 'next/image';
import { useRouter } from 'next/router';

import { changeLocale } from '@/utils/changeLocale';

export default function LocaleSwitch() {
    const router = useRouter();
    return (
        <button onClick={() => changeLocale(router)}>
            <Image src={'/icons/globe.svg'} alt='Change Langueage' width={30} height={30} className='hidden dark:block' />
            <Image src={'/icons/globe_dark.svg'} alt='Change Langueage' width={30} height={30} className='dark:hidden' />
        </button>
    );
}
