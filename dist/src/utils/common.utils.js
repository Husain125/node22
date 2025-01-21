"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sizeCalculator = void 0;
exports.secondsToDaysTime = secondsToDaysTime;
const sizeCalculator = (num) => {
    const sizes = ['byte', 'kb', 'mb', 'gb', 'tb', 'pb'];
    let n = typeof num === 'string' ? parseInt(num, 10) : num;
    let i = 0;
    while (n >= 1024 && i < sizes.length - 1) {
        n /= 1024;
        i++;
    }
    return `${n.toFixed(2)} ${sizes[i]}`;
};
exports.sizeCalculator = sizeCalculator;
function secondsToDaysTime(seconds) {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    // Format numbers with leading zeros
    const format = (num) => String(num).padStart(2, '0');
    return `${days} days, ${format(hours)}:${format(minutes)}:${format(secs)}`;
}
//# sourceMappingURL=common.utils.js.map