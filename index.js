let express = require("express");
let app = express();

let MovieStore = require("./moviestore.js");
let movieStore = new MovieStore();

app.get("/movies", (req, res) => {
    return res.send(movieStore.all());
})

app.get("/", (req, res) => {
    return res.send("Hello word...");
    // return res.redirect('/movies')
})

app.get("/movies/:title", (req, res) => {
    console.log(req.params);

    let findMovie = movieStore.find(req.params.title);

    if (findMovie.length < 1) {
        res.statusCode = 404; // not found
        return res.send({
            message: "movie not found"
        })
    }

    return res.send({
        message: "found movie",
        payload: findMovie
    });

})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`)
})

