/// <reference path="../../../vineyard/vineyard.d.ts"/>
/// <reference path="../../../vineyard-lawn/lawn.d.ts"/>

import Vineyard = require('vineyard')

interface User_Configuration {
	password_salt?:string
}

class User extends Vineyard.Bulb {

	config:User_Configuration

	grow() {

	}

	prepare_password(password) {
		return this.config.password_salt && typeof this.config.password_salt === 'string'
			? this.encrypt_password(password)
			: password
	}

	encrypt_password(password) {
		var crypto = require('crypto')
		return crypto.createHmac('sha256', this.config.password_salt).update(password).digest('hex')
	}
}

module.exports = User