// 'use strict';

// const Fs = require('fs');

// (async function () {

//     const items = [
//         'images'
//     ];

//     for (const item of items) {
//         const path = `src/facility/${item}.js`;
//         const result = await Fs.promises.readdir(`src/facility/${item}/`);

//         const file = `window.${item} = ` + JSON.stringify(result);
//         await Fs.promises.writeFile(path, file, null, '\t');
//     }

// }());
