const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            minlength: 3,
            maxlength: 20,
            default: null,
            unique:true
        },
        Email: {
            type: String,
        },
        password: {
            type: String,
        },
        FirstName: {
            type: String,
            minlength: 3,
            maxlength: 10,
            default: null

        },
        LastName: {
            type: String,
            minlength: 3,
            maxlength: 10,
            default: null
        },
        isAdmain: {
        type: Boolean,
        default:false

        },
    },
    {
        toJSON: {
            transform: (doc, ret, options) => {
                delete ret.password;
                delete ret.__v;
                return ret;
            },
        },
    }
);
userSchema.pre('save', function () {
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
});
const User = mongoose.model("User", userSchema);
module.exports = User;

