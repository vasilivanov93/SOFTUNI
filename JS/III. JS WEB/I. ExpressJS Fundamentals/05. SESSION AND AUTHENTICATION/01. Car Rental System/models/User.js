const mongoose = require('mongoose');
const encryption = require('../util/encryption');
const propertyIsRequired = '{0} is required.';

const userSchema = new mongoose.Schema({
    username: { type: mongoose.Schema.Types.String, required: propertyIsRequired.replace('{0}', 'Username'), unique: true },
    hashedPass: { type: mongoose.Schema.Types.String, required: propertyIsRequired.replace('{0}', 'Password') },
    firstName: { type: mongoose.Schema.Types.String, required: propertyIsRequired.replace('{0}', 'First name') },
    lastName: { type: mongoose.Schema.Types.String, required: propertyIsRequired.replace('{0}', 'Last name') },
    salt: { type: mongoose.Schema.Types.String, required: true },
    roles: [{ type: mongoose.Schema.Types.String }]
});

userSchema.method({
    authenticate: function (password) {
        return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

module.exports.seedAdminUser = async () => {
    try {
        let users = await User.find();

        if (users.length > 0) {
            return;
        }

        const salt = encryption.generateSalt();
        const hashedPass = encryption.generateHashedPassword(salt, 'Admin');

        return User.create({
            username: 'admin',
            salt,
            hashedPass,
            roles: ['Admin']
        });
    } catch (e) {
        console.log(e);
    }
};
