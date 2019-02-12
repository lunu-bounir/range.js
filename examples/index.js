/* globals range */
'use strict';

var [...ranges] = range.prepare();

document.getElementById('e20').addEventListener('click', () => ranges[0].value = 20);
document.getElementById('e80').addEventListener('click', () => ranges[0].value = 80);

