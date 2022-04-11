'use strict';

const timerId = setTimeout(() => {
    console.log("hello");
}, 2000);

clearInterval(timerId);