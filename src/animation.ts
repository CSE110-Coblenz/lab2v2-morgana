export function fancyText(text): void {
    console.log(`\x1b[1m${text}\x1b[0m`);
    console.log(`\x1b[3m${text}\x1b[0m`);
}

fancyText('hello');