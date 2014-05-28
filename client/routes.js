Router.map(function() {
    this.route('posts', {
        path: '/'
    })
    this.route('editor', {
        path: '/editor/:_id',
        data: function() {
            return Posts.findOne(this.params._id)
        }
    })
    this.route('uploads')
});

Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',
});