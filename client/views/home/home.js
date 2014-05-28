Template.editor.post = function() {
    return Posts.findOne()
}

Template.editor.rendered = function() {}

Template.editor.events({
    'keyup #liveEditor': function(event, template) {
        Posts.update(this._id, {
            $set: {
                text: event.target.value
            }
        })
    }
})