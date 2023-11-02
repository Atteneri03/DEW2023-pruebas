const PaidPost = require('./paid-post');

class Newspaper extends PaidPost{
    district;

    constructor(name,num,district){
        super(name,num);
        this.district = district;
    }

    get summary(){
        return `${super.summary} of ${this.district}`;
    }
}

module.exports = Newspaper;