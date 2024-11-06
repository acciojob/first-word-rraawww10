function firstWord(str) {
    let trimmedStr = str.trim();
    let spaceIndex = trimmedStr.indexOf(' ');
    return spaceIndex === -1 ? trimmedStr : trimmedStr.slice(0, spaceIndex);
}
const s = prompt("Enter a string");

alert(firstWord(s));