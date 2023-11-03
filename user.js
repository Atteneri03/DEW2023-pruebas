
class User {
    name;

    constructor(name) {
        this.name = name;
    }

    read(book) {
        return `${this.name} is reading ${book}`;
    }

    notify(post){
        // if(post instanceof PaidPost){
        //     return this.read((new Magazine(post.name, post.price, post.topic).summary));
        
        // } else if (post instanceof Post){
        //     return this.read((new Post(post.name)).summary);
        // }
        return this.read(post.summary);
    }
}

module.exports = User;