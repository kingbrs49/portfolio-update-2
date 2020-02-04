module.exports = function (app) {
    app.get("/api/about", function (req, res) {
        cloudinary.search
            .expression('resource_type:image')
            .sort_by('public_id', 'desc')
            .max_results(30)
            .execute().then(result => {
            //console.log(result);
                const shuffledResult = shuffle(result.resources);
                // console.log(shuffledResult);
                // req.send(shuffledResult[0].url)
                var aboutImg = shuffledResult[0].url
                res.send(aboutImg);
                // console.log(shuffledResult[0].url)
                res.json(shuffledResult);
            // Math.floor(Math.random() * shuffledResult[0].url);
            });
        });
    };