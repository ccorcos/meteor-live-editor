Posts = new Meteor.Collection("posts")

var uploadStore = new FS.Store.GridFS("uploads");

Uploads = new FS.Collection("uploads", {
    stores: [uploadStore]
});