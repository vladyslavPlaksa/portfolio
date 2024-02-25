import { ReactNode } from 'react';

const Button = ({ children }: { children: ReactNode }) => {
    return (
        <span
            className={
                'bg-secondary-green/25 border-secondary-green dark:bg-secondary-pink/25 dark:border-secondary-pink text-md hover:bg-secondary-green/65 dark:hover:bg-secondary-pink/65 border border-solid px-3 py-1 font-michroma transition duration-300 ease-in-out sm:text-lg md:text-xl'
            }
        >
            {children}
        </span>
    );
};

export default Button;
