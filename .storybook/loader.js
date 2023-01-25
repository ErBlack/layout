module.exports = function loader(source) {
    const match = this.resourcePath.match(/src\/([^/]*)\/.*/);

    if (match) {
        return `#user-${match[1]}{${source}}`;
    }

    return source;
};
