import { ReactNode } from 'react';

const Button = ({ children }: { children: ReactNode }) => {
    return (
        <span
            className={
                'rounded-sm border border-solid border-secondary-500 bg-secondary-500/50 px-2.5 py-1.5 text-primary-100 dark:border-secondary-100/80 dark:bg-secondary-100 dark:bg-secondary-100/80'
            }
        >
            {children}
        </span>
    );
};

export default Button;
