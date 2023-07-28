// import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./comment');

// define models
User.hasMany(Post, {
    foreignKey: 'user_id' 
});

// single user post
Post.belongsTo(User, {
    foreignKey: 'user_id' 
});

// single user comment
Comment.belongsTo(User, {
    foreignKey: 'user_id', 
    onDelete: 'cascade', 
    hooks: true 
});

// single post comment
Comment.belongsTo(Post, {
    foreignKey: 'post_id', 
    onDelete: 'cascade', 
    hooks: true 
});

// user one to many
User.hasMany(Comment, {
    foreignKey: 'user_id', 
    onDelete: 'cascade', 
    hooks: true 
});

// post one to many
Post.hasMany(Comment, {
    foreignKey: 'post_id', 
    onDelete: 'cascade', 
    hooks: true 
});

//export models
module.exports = { User, Post, Comment };