import express from "express";
const app = express();
import ImageKit from "imagekit";
const imagekit = new ImageKit({
  publicKey: "public_S6vyU9FG56dNofgzx0hbbBAZGDs=",
  privateKey: "private_1LD3K7nVG8n6LkP08+Lk21zCZ3M=",
  urlEndpoint: "https://ik.imagekit.io/flamefoxeswyvernp",
});
app.use(express.json());
app.get("/sign", (req, res) => {
  var authentcationParameters = imagekit.getAuthenticationParameters();
  res.send(authentcationParameters);
});
app.post("/move/product", (req, res) => {
  const { src, des } = req.body;
  imagekit
    .moveFile(src, des, (err, response) => {
      console.log(err);
      // res.json(response);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.listen(4321, () => {
  console.log("image handler server listening on http://localhost:4321");
});
