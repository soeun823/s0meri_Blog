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
	static getUserInfo(id){
		const users = this.#users;
		const idx = users.id.indexOf(id);
		const usersKeys= Object.keys(users);
		const userInfo = usersKeys.reduce((newUsers, info)=>{
			newUsers[info] = users[info][idx];
			return newUsers;
		},{});
		return userInfo;
	}

	static save(userInfo){
		const users = this.#users;
		users.id.push(userInfo.id);
		users.name.push(userInfo.name);
		users.psword.push(userInfo.psword);
		return { success : true };
	}

}
module.exports = UserStorage;