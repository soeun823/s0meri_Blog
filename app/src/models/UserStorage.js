"use strict"

class UserStorage{
	static #users={ //#표시는 private접근 권한
    id : ["nono","moon","s0meri"],
    psword : ["1234","1234","2345"],
		name: ["안민주","문소정","소메리"]
	};

	static getUsers(...fields){
		const users = this.#users;
		const newUsers = fields.reduce((newUsers, field) => {
			if(users.hasOwnProperty(field)){
				newUsers[field] = users[field];
			}
			return newUsers;
		},{})
		return newUsers;
	}
}
module.exports = UserStorage;