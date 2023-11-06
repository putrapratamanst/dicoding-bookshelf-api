const validateName = (name) => {
    return (typeof name !== "undefined");
}

const validateReadPageCount = (readPage, pageCount) => {
    return (readPage <= pageCount);
}
module.exports = { validateName, validateReadPageCount }