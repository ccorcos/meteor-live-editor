Posts = new Meteor.Collection("posts")

// var base = "";

// if (Meteor.isServer) {
//     base = process.env.PWD;
// }

// Uploads = new FS.Collection("uploads", {
//     stores: [new FS.Store.FileSystem("uploads", {
//         path: base + "/uploads"
//     })]
// });

var uploadStore = new FS.Store.GridFS("uploads");

Uploads = new FS.Collection("uploads", {
    stores: [uploadStore]
});