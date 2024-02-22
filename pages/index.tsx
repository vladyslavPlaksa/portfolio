/* eslint-disable react/no-unescaped-entities */
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useTranslations } from 'next-intl';

import Button from '@/shared/Button';
import Topnav from '@/shared/Topnav/Topnav';

export default function Home() {
    const t = useTranslations('TopNav');

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
            <main style={{ height: '200vh' }} id='home'>
                <Topnav />
                <article>
                    <p id='about' className='mt-10 scroll-mt-24'>
                        ipsum dolor sit amet consectetur adipisicing elit. Eligendi nesciunt aperiam sapiente qui temporibus, quos vel enim id voluptates fugiat
                        veniam pariatur, incidunt accusantium. Laboriosam eligendi numquam corrupti praesentium accusamus? Tempora numquam fuga voluptatibus
                        fugit consequuntur totam eum praesentium reprehenderit, architecto quam inventore, suscipit, dicta natus a consequatur. Qui
                        reprehenderit illum consectetur sit nemo ducimus ea unde voluptates facere eaque? Temporibus perferendis in libero autem ullam
                        consequuntur cumque animi blanditiis velit pariatur voluptatibus, nihil excepturi quisquam facere deleniti, amet quam possimus quidem
                        neque minus at dolores. Ea consectetur amet animi. Obcaecati voluptatibus distinctio rerum asperiores consequatur, atque, aut dicta
                        incidunt molestias eos<Button>{t('links.About.title')}</Button> <Button>{t('links.Skills.title')}</Button>{' '}
                        <Button>{t('links.Contact.title')}</Button> repellat est nobis sed! Ut laborum veniam consectetur sed vitae, nemo quibusdam temporibus
                        obcaecati? Nulla soluta dignissimos sed quae veniam fugit earum dicta dolores laudantium ex! Repudiandae odio fugit facilis quae quia et
                        rerum dignissimos ex eos. Incidunt enim, inventore necessitatibus laboriosam atque expedita!
                    </p>
                    <p id='skills' className='mt-10 scroll-mt-24'>
                        Skills ipsum dolor sit amet consectetur adipisicing elit. Eligendi nesciunt aperiam sapiente qui temporibus, quos vel enim id voluptates
                        fugiat veniam pariatur, incidunt accusantium. Laboriosam eligendi numquam corrupti praesentium accusamus? Tempora numquam fuga
                        voluptatibus fugit consequuntur totam eum praesentium reprehenderit, architecto quam inventore, suscipit, dicta natus a consequatur. Qui
                        reprehenderit illum consectetur sit nemo ducimus ea unde voluptates facere eaque? Temporibus perferendis in libero autem ullam
                        consequuntur cumque animi blanditiis velit pariatur voluptatibus, nihil excepturi quisquam facere deleniti, amet quam possimus quidem
                        neque minus at dolores. Ea consectetur amet animi. Obcaecati voluptatibus distinctio rerum asperiores consequatur, atque, aut dicta
                        incidunt molestias eos blanditiis tenetur dolor. Atque repellat est nobis sed! Ut laborum veniam consectetur sed vitae, nemo quibusdam
                        temporibus obcaecati? Nulla soluta dignissimos sed quae veniam fugit earum dicta dolores laudantium ex! Repudiandae odio fugit facilis
                        quae quia et rerum dignissimos ex eos. Incidunt enim, inventore necessitatibus laboriosam atque expedita!
                    </p>
                    <p id='contact' className='mt-10 scroll-mt-24'>
                        Contact ipsum dolor sit amet consectetur adipisicing elit. Eligendi nesciunt aperiam sapiente qui temporibus, quos vel enim id
                        voluptates fugiat veniam pariatur, incidunt accusantium. Laboriosam eligendi numquam corrupti praesentium accusamus? Tempora numquam
                        fuga voluptatibus fugit consequuntur totam eum praesentium reprehenderit, architecto quam inventore, suscipit, dicta natus a
                        consequatur. Qui reprehenderit illum consectetur sit nemo ducimus ea unde voluptates facere eaque? Temporibus perferendis in libero
                        autem ullam consequuntur cumque animi blanditiis velit pariatur voluptatibus, nihil excepturi quisquam facere deleniti, amet quam
                        possimus quidem neque minus at dolores. Ea consectetur amet animi. Obcaecati voluptatibus distinctio rerum asperiores consequatur,
                        atque, aut dicta incidunt molestias eos blanditiis tenetur dolor. Atque repellat est nobis sed! Ut laborum veniam consectetur sed vitae,
                        nemo quibusdam temporibus obcaecati? Nulla soluta dignissimos sed quae veniam fugit earum dicta dolores laudantium ex! Repudiandae odio
                        fugit facilis quae quia et rerum dignissimos ex eos. Incidunt enim, inventore necessitatibus laboriosam atque expedita!
                    </p>
                </article>
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
