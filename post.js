
class Post {
    name;
    #num = 0;

    constructor(name){
        this.name = name;
    }

    get summary(){
        return `${this.name} publication number ${this.#num}`;
    }
}
module.exports = Post;