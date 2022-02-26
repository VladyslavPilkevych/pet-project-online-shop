export const setItemToLS = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
export const getItemFromLS = (key) => {
    if (!localStorage.getItem(key)) {
        return null;
    }

    return JSON.parse(localStorage.getItem(key));
}
export const removeItemFromLS = (key) => {
    localStorage.removeItem(key);
}