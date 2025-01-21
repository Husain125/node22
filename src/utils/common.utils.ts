export const sizeCalculator = (num: number | string): string => {
    const sizes = ['byte', 'kb', 'mb', 'gb', 'tb', 'pb'];
    let n = typeof num === 'string' ? parseInt(num, 10) : num;
    let i = 0;

    while (n >= 1024 && i < sizes.length - 1) {
        n /= 1024;
        i++;
    }

    return `${n.toFixed(2)} ${sizes[i]}`;
};

export function secondsToDaysTime(seconds: number) {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    // Format numbers with leading zeros
    const format = (num) => String(num).padStart(2, '0');

    return `${days} days, ${format(hours)}:${format(minutes)}:${format(secs)}`;
}