Template.posts.posts = function() {
    return Posts.find()
}

var defaultPost = {
    text: "#New Post#\n\n"
}

Template.posts.events({
    'click .new.post': function(event, template) {
        postId = Posts.insert(defaultPost)
        Router.go('editor', {
            _id: postId
        })
    },
    'click .delete.post': function(event, template) {
        if (confirm("Are you sure you want to delete this post?")) {
            Posts.remove(this._id)
        }
    }
})