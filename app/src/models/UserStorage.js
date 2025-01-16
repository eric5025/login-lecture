"use strict";

class UserStorage{
   static #users = {
    id: ["eric", "권혁진", "인덕대"],
    password: ["5025", "1234", "12345"],
    name: ["권혁진","허준상","정서구"],
   }
   static getUsers(...fields){
    const users =  this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
        if (users.hasOwnProperty(field)){
             newUsers[field] = users[field];
        }
        return newUsers
    },{});
   
    return newUsers;
   }
}       


module.exports = UserStorage;