/* eslint-disable react/no-unescaped-entities */
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import AboutMe from '@/shared/Sections/About';
import HeroSection from '@/shared/Sections/HeroSection';
import Projects from '@/shared/Sections/Projects';
import Skills from '@/shared/Sections/Skills';
import WorkExperience from '@/shared/Sections/WorkExperience';
import Topnav from '@/shared/Topnav/Topnav';
import ScrollToTop from '@/shared/utils/ScrollToTop';

export default function Home() {
    return (
        <>
            <Head>
                <title>Vladyslav Plaksa's Portfolio</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='description' content='Portfolio website for software developer, Vladyslav Plaksa' />
                <meta name='keywords' content='Vladyslav Plaksa, software developer, web developer, portfolio' />
                <meta name='author' content='Vladyslav Plaksa' />
                <meta name='robots' content='index, follow' />
                <link rel='icon' href='/logo_dark.png' type='image/png' sizes='32x32' />
                <link rel='mask-icon' href='/logo_dark.png' type='image/png' sizes='32x32' />
            </Head>
            <main style={{ paddingBottom: '200px' }} className='relative' id='home'>
                <Image src='/background.png' alt='Background' width={800} height={750} className='absolute left-0 top-10 -z-10' />
                <Image src='/background.png' alt='Background' width={800} height={750} className='absolute bottom-0 right-0 -z-10 rotate-180' />
                <Topnav />

                <HeroSection />

                <AboutMe />

                <Skills />

                <WorkExperience />

                <Projects />

                <ScrollToTop />
            </main>
        </>
    );
}

export async function getStaticProps(context: GetServerSidePropsContext) {
    return {
        props: {
            // You can get the messages from anywhere you like. The recommended
            // pattern is to put them in JSON files separated by locale and read
            // the desired one based on the `locale` received from Next.js.
            messages: (await import(`@/messages/${context.locale}.json`)).default,
        },
    };
}
