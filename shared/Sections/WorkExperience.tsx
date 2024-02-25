import { useTranslations } from 'next-intl';

import Button from '../utils/Button';

export default function WorkExperience() {
    const t = useTranslations('Work');

    const workExperienceConfig = [
        {
            title: t('jobs.heyHomie.title'),
            date: t('jobs.heyHomie.date'),
            description: [t('jobs.heyHomie.description.1'), t('jobs.heyHomie.description.2')],
            technologies: [
                t('jobs.heyHomie.technologies.1'),
                t('jobs.heyHomie.technologies.2'),
                t('jobs.heyHomie.technologies.3'),
                t('jobs.heyHomie.technologies.4'),
            ],
        },
        {
            title: t('jobs.myEventeo.title'),
            date: t('jobs.myEventeo.date'),
            description: [t('jobs.myEventeo.description.1'), t('jobs.myEventeo.description.2'), t('jobs.myEventeo.description.3')],
            technologies: [
                t('jobs.myEventeo.technologies.1'),
                t('jobs.myEventeo.technologies.2'),
                t('jobs.myEventeo.technologies.3'),
                t('jobs.myEventeo.technologies.4'),
                t('jobs.myEventeo.technologies.5'),
            ],
        },
    ];

    return (
        <div className='px-10 pt-[100px] sm:px-16 md:px-20 lg:px-28' id='work'>
            <h2 className='font-michroma text-2xl text-secondary-pink sm:text-3xl md:text-4xl dark:text-secondary-green'>{t('title')}</h2>
            {workExperienceConfig.map(work => (
                <div key={work.title} className='flex flex-col gap-x-7 gap-y-1 pb-3 pl-5 pt-5 md:flex-row'>
                    <p className='w-48 text-lg sm:text-xl'>{work.date}</p>
                    <div className='md:w-10/12 lg:w-6/12'>
                        <h3 className=' text-3xl'>{work.title}</h3>
                        <ul className='list-disc pl-4 pt-3'>
                            {work.description.map(desc => (
                                <li key={desc} className='pt-1'>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                        <div className='flex flex-wrap gap-x-3 gap-y-2.5 pt-3'>
                            {work.technologies.map(tech => (
                                <Button key={tech} className='text-sm'>
                                    {tech}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
