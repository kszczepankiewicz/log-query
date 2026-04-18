'use strict';
const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const constantTextEl = document.getElementById('constant-text');
const outputEl = document.getElementById('output');
const resetEl = document.getElementById('reset');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = (constantTextEl.value + ' ' + inputEl.value).trim();
    outputEl.textContent += value + '\n';
    // getLogs();
    // setLogs(logs)
    navigator.clipboard.writeText(value).catch(() => alert('Not copied'));
    window.open(`https://www.google.com/search?q=` + encodeURIComponent(value));
});

resetEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (!inputEl.value && !constantTextEl.value || !confirm('Do you want to clear all fields in the form:')) {
        return;
    }
    [inputEl, constantTextEl].forEach(el => el.value = '');
});
const getLogs = () => { };

//saveToLocalStorage(newEntry)
// setLogs(logs)
// addTime(str) 




