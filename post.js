
class Post {
    name;
    #num = 0;
    #subscribers = [];

    constructor(name){
        this.name = name;
    }

    get summary(){
        return `${this.name} publication number ${this.#num}`;
    }

    getSubscribers(){
        const subs = this.#subscribers.map((user) => user.name).join(",");
        return subs;
    }

    attach(user) {
        if(user.className = "User" && !this.#subscribers.includes(user)){
            this.#subscribers.push(user);
        }
    }

    detach(user){
        if(this.#subscribers.includes(user)){
            this.#subscribers.splice(this.#subscribers.indexOf(user),1);
        }
    }

    publish() {
        this.#num += 1;
        return this.#subscribers.map((s) => s.notify(this));
      }
    
}
module.exports = Post;