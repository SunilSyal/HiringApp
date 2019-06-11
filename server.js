const express = require("express");
const next = require("next");
const mongo = require("./apis/mongoConnection");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    mongo.connectMongo();

    server.use(bodyParser.json());

    server.get("/f/:id?", (req, res) => {
      const actualPage = "/feedback";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.post("/api/pipeline", (req, res) => {
      mongo.fetchPipeline(req.body.query).then(data => {
        res.json(data);
      });
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
