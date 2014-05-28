UI.registerHelper('sessionVar', function(string) {
    return Session.get(string)
})

UI.registerHelper('keyValue', function(context, options) {
    var result = [];
    _.each(context, function(value, key, list) {
        result.push({
            key: key,
            value: value
        });
    })
    return result;
});

UI.registerHelper('markdownTitle', function(text) {
    title = text.split('\n')[0].replace(/#/g, '')
    return title ? title : "Untitled"
});