var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Vineyard = require('vineyard');

var User = (function (_super) {
    __extends(User, _super);
    function User() {
        _super.apply(this, arguments);
    }
    User.prototype.grow = function () {
    };

    User.prototype.prepare_password = function (password) {
        return this.config.password_salt && typeof this.config.password_salt === 'string' ? this.encrypt_password(password) : password;
    };

    User.prototype.encrypt_password = function (password) {
        var crypto = require('crypto');
        return crypto.createHmac('sha256', this.config.password_salt).update(password).digest('hex');
    };
    return User;
})(Vineyard.Bulb);

module.exports = User;
