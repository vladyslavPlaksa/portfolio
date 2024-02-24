import Image from 'next/image';

import { smoothScroll } from '@/utils/smoothScrollTo';

export default function ScrollToTop() {
    return (
        <button className='fixed bottom-7 right-7' onClick={event => smoothScroll('#home', event)}>
            <Image src={'/icons/scroll_to_top_dark.svg'} alt='Scroll to Top' width={50} height={50} className='dark:hidden' />
            <Image src={'/icons/scroll_to_top.svg'} alt='Scroll to Top' width={50} height={50} className='hidden dark:inline' />
        </button>
    );
}
