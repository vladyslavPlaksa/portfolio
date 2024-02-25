import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import Button from '../utils/Button';

export default function Projects() {
    const t = useTranslations('Projects');

    const projectsConfig = [
        {
            title: t('projects.phanex.title'),
            description: t('projects.phanex.description'),
            technologies: [
                t('projects.phanex.technologies.1'),
                t('projects.phanex.technologies.2'),
                t('projects.phanex.technologies.3'),
                t('projects.phanex.technologies.4'),
            ],
            links: { github: t('projects.phanex.links.github'), site: t('projects.phanex.links.site') },
        },
        {
            title: t('projects.graphCML.title'),
            description: t('projects.graphCML.description'),
            technologies: [
                t('projects.graphCML.technologies.1'),
                t('projects.graphCML.technologies.2'),
                t('projects.graphCML.technologies.3'),
                t('projects.graphCML.technologies.4'),
            ],
            links: { github: t('projects.graphCML.links.github'), site: t('projects.graphCML.links.site') },
        },
    ];

    return (
        <div className='px-10 pt-[100px] sm:px-16 md:px-20 lg:px-28' id='projects'>
            <h3 className='text-secondary-pink dark:text-secondary-green font-michroma text-2xl sm:text-3xl md:text-4xl'>{t('title')}</h3>
            <div className='flex flex-col gap-x-3 gap-y-2.5 pt-5 lg:flex-row'>
                {projectsConfig.map(project => (
                    <div className='flex max-w-[500px] flex-col border border-solid border-primary-900 dark:border-primary-300' key={project.title}>
                        <div className='flex flex-row items-center justify-between border-b border-solid border-primary-900 px-4 py-3 dark:border-primary-300'>
                            <h3 className='text-secondary-pink dark:text-secondary-green font-michroma text-2xl'>{project.title}</h3>
                            <span className='flex flex-row gap-2'>
                                <Link href={project.links.github} target='_blank'>
                                    <Image src='/icons/github_dark.svg' alt='Github' width={30} height={30} className='dark:hidden' />
                                    <Image src='/icons/github.svg' alt='Github' width={30} height={30} className='hidden dark:inline' />
                                </Link>
                                <Link href={project.links.site} target='_blank'>
                                    <Image src='/icons/link_dark.svg' alt='Link' width={30} height={30} className='dark:hidden' />
                                    <Image src='/icons/link.svg' alt='Link' width={30} height={30} className='hidden dark:inline' />
                                </Link>
                            </span>
                        </div>
                        <div className='flex h-full flex-col justify-between'>
                            <p className='py-3 pl-4 text-lg'>{project.description}</p>
                            <div className='flex flex-wrap gap-2 py-3 pl-4'>
                                {project.technologies.map(tech => (
                                    <Button key={tech} className='text-sm'>
                                        {tech}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
