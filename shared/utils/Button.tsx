import { ReactNode } from 'react';

const Button = ({ children }: { children: ReactNode }) => {
    return <span className={'px-1 py-0.5 text-4xl font-bold text-secondary-500'}>{children}</span>;
};

export default Button;
