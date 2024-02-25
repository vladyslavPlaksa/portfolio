export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='flex items-center justify-center pt-10'>
            <div className='flex h-14 w-11/12 items-center gap-3 border-t border-solid border-primary-500 pl-2 text-xs text-primary-700 dark:border-primary-700 dark:text-primary-500'>
                <p className='min-w-fit'>© {currentYear}</p>
                <span>Developed by Vladyslav Plaksa</span>
                <span>Designed by Liza Tkachenko</span>
            </div>
        </footer>
    );
}
