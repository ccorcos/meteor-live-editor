Meteor.startup(function() {
    if (Posts.find().count() === 0) {
        Posts.insert({
            text: "this is just default",
            editors: {}
        })
    };
});