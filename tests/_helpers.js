module.exports = {
    contains: function (hay, needle) {
        var regExp = new RegExp(needle, 'gm');

        return hay.match(regExp) && hay.match(regExp).length;
    },

    title: function (title) {
        console.log('# ');
        console.log('# ' + title + ':');
        console.log('# --------------------------------------------');
    },

    debug: function (data) {
        console.log(data.output ? data.output : data);
    }
};
