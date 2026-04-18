'use strict';
const LOCAL_STORAGE_ITEM_NAME = 'logs';

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

const setLogs = logs => localStorage.setItem(LOCAL_STORAGE_ITEM_NAME, JSON.stringify(logs));
const getLogs = () => {
    const raw = localStorage.getItem(LOCAL_STORAGE_ITEM_NAME);
    if (!raw) return [];
    let logs;
    try {
        logs = JSON.parse(raw);
    } catch (error) {
        return [];
    }
    if (!Array.isArray(logs)) return [];
    return logs;
};
//saveToLocalStorage(newEntry)
// addTime(str) 

