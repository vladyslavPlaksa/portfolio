import { useTranslations } from 'next-intl';

import Button from '../utils/Button';

const skillsConfig = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'Java' },
    { name: 'Php' },
    { name: 'Next.js' },
    { name: 'Tailwind CSS' },
    { name: 'Node.js' },
    { name: 'Express.js' },
    { name: 'MongoDB' },
    { name: 'Firebase' },
    { name: 'Postman' },
    { name: 'Jest' },
    { name: 'npm' },
    { name: 'Webpack' },
    { name: 'Babel' },
    { name: 'ESLint' },
    { name: 'Git' },
    { name: 'Docker' },
    { name: 'Linux' },
];

export default function Skills() {
    const t = useTranslations('Skills');
    return (
        <div className='px-10 pt-[100px] sm:px-16 md:px-20 lg:px-28' id='skills'>
            <h3 className='text-secondary-pink dark:text-secondary-green font-michroma text-2xl sm:text-3xl md:text-4xl'>{t(`title`)}</h3>
            <div className='flex flex-wrap gap-x-3 gap-y-2.5 pt-5'>
                {skillsConfig.map(skill => (
                    <Button key={skill.name}>{skill.name}</Button>
                ))}
            </div>
        </div>
    );
}
