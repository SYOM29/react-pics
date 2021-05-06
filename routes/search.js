const unsplash = require("../api/unsplash");

async function getImages()
{
    return await unsplash.get("/search/photos", {
        params: { query: term }
    });
}

module.exports = (app) => {
  app.get('/auth/google', async function(req, res) {
    res.json(await getImages())
  });
}