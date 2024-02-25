import { ReactNode } from 'react';

const Button = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <span
            className={`bg-secondary-green/25 border-secondary-green dark:bg-secondary-pink/25 dark:border-secondary-pink  hover:bg-secondary-green/65 dark:hover:bg-secondary-pink/65 cursor-default border border-solid px-3 py-1 font-michroma transition duration-300 ease-in-out ${className ? `${className}` : 'text-md sm:text-lg md:text-xl'}`}
        >
            {children}
        </span>
    );
};

export default Button;
