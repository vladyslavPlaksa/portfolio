import { useTranslations } from 'next-intl';

import Button from '../utils/Button';

const skillsConfig = [
    { name: 'Python' },
    { name: 'Java' },
    { name: 'Linux Administration' },
    { name: 'Docker' },
    { name: 'Kubernetes' },
    { name: 'Helm' },
    { name: 'Monitoring & Observability' },
    { name: 'CI/CD & GitOps' },
    { name: 'Flux' },
    { name: 'Argo CD' },
    { name: 'Terraform' },
    { name: 'Incident Management' },
    { name: 'Performance Tuning' },
    { name: 'Distributed Systems' },
    { name: 'Incident Response & On-Call' },
    { name: 'SLIs/SLOs' },
    { name: 'JavaScript/Node.js' },
];

export default function Skills() {
    const t = useTranslations('Skills');
    return (
        <div className='px-10 pt-[100px] sm:px-16 md:px-20 lg:px-28' id='skills'>
            <h2 className='font-michroma text-2xl text-secondary-pink sm:text-3xl md:text-4xl dark:text-secondary-green'>{t(`title`)}</h2>
            <div className='flex flex-wrap gap-x-3 gap-y-2.5 pt-5'>
                {skillsConfig.map(skill => (
                    <Button key={skill.name}>{skill.name}</Button>
                ))}
            </div>
        </div>
    );
}
