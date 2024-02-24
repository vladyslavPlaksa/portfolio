export const smoothScroll = (target: string, event: React.MouseEvent) => {
    event.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
};
