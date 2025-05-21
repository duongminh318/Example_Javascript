// moduleA.js
export default function greeting(name) {
    return `Hello, ${name}!`;
}

//Named Exports (thêm vào)
export const AUTHOR_NAME = "JavaScript Master"; // Named Export là một hằng số

export function getCurrentYear() { // Named Export là một hàm
    return new Date().getFullYear();
}

