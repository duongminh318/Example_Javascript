
//import tenTuyY from 'duong-dan-module';

import sayHello,  { AUTHOR_NAME, getCurrentYear } from '../moduleA.js'

console.log(sayHello("Ngọc"));

//import { tenExport1, tenExport2, ... } from 'duong-dan-module';

console.log("Module Author:", AUTHOR_NAME); // Sử dụng hằng số AUTHOR_NAME
console.log("Current Year:", getCurrentYear()); // Gọi hàm getCurrentYear

