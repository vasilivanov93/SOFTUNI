const User = require('../models/User');
const Thread = require('../models/Thread');
const Message = require('../models/Message');

module.exports = {
    findThread: async (req, res) => {
        try {
            let currentUser = req.user._id;
            let otherUser = await User.findOne({username: req.body.username});

            let thread = await Thread.findOne({
                users: {
                    $all: [currentUser, otherUser._id]
                }
            });

            if (!thread) {
                let thread = await Thread.create({
                    users: [currentUser, otherUser._id]
                });
            }

            res.redirect(`/thread/${req.body.username}`);
        } catch (e) {
            console.log(e);
        }
    },
    openThread: (req, res) => {
        let currentUser = req.user._id;
        let otherUsername = req.params.username;

        User.findOne({username: otherUsername}).then((otherUser) => {
            Thread.findOne({
                users: {
                    $all: [currentUser, otherUser._id]
                }
            }).then((thread) => {
                Message.find({thread: thread._id}).then((messages) => {
                    for (let message of messages) {
                        if (message.user.toString() === req.user._id.toString()) {
                            message.isMine = true;
                        }
                        if (message.content.startsWith('http') || message.content.endsWith('.jpg')) {
                            message.isImage = true;
                        }
                    }

                    let otherIsBlocked = false;
                    let amBlocked = false;

                    if (otherUser.blockedUsers.includes(req.user.username)) {
                        amBlocked = true;
                    }

                    if (req.user.blockedUsers.includes(req.params.username)) {
                        otherIsBlocked = true;
                    }

                    res.render('threads/chatRoom', {
                        username: otherUsername,
                        id: thread._id,
                        messages,
                        otherIsBlocked,
                        amBlocked
                    });
                });
            })
        }).catch((e) => {
            console.log(e);
        })
    },
    sendMessage: (req, res) => {
        let content = req.body.message;
        let threadId = req.body.threadId;
        let user = req.user._id;

        Message.create({
            content,
            user,
            thread: threadId
        }).then(() => {
            res.redirect(`/thread/${req.params.username}`);
        }).catch((e) => {
            console.log(e);
        });
    },
    removeThread: (req, res) => {
        let threadId = req.params.threadId;

        Message.find({thread: threadId})
            .remove(() => {
                Thread.findByIdAndRemove(threadId)
                    .then(() => {
                        res.redirect('/');
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            });
    }
};