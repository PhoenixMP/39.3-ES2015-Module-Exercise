
function choice(items) {
    let idx = Math.floor(Math.random() * items.length + 1) - 1;
    return items[idx];
}

function remove(items, searchItem) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === searchItem) {
            return items.splice(i, 1);
        }
    }
    return undefined;
}

export { choice, remove };