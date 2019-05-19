class MovieStore {
    constructor() {
        this.movieData = require("./datastore.json");
    }

    all() {
        return this.movieData;
    }

    find(titleName) {
        // return this.movieData.filter(m => m.Title === title);
        //todo:
        return {};
    }
}

module.exports = MovieStore;
