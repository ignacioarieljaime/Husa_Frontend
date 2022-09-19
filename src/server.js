require("dotenv").config();
const data = require("./page.json");
const express = require("express");
const next = require("next");
const notifier = require("node-notifier");
const path = require("path");
const open = require("open");
const port = process.env.APP_PORT;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const fs = require("fs");

app.prepare().then(() => {
  const server = express();

  server.all("*", (req, res) => {
    data.response.forEach((page) => {
      makePage(`./src/pages/${page.name}`, generateComponent(page.components));
    });

    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
    notifier.notify(
      {
        title: "husa",
        message: `husa  App is run! \nmode : ${
          process.env.NODE_ENV === "production" ? "production" : "development"
        }`,
        appID: "\t",
        icon: path.join(__dirname, "../", "public", "logo.png"),
        sound: true,
        wait: true,
      },
      function (err, response, metadata) {
        // open(`http://localhost:${port}`);
      }
    );
  });
});

const generateComponent = (_content) => {
  return `function Text() {
    return (
      <div>${_content}</div>
    )
  }
  
  export default Text`;
};

const makePage = async (folderName, content) => {
  if (!fs.existsSync(folderName)) {
    await fs.mkdirSync(folderName);
    fs.writeFile(`${folderName}/index.js`, content, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
};
