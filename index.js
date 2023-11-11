import express from "express";
import bodyParser from "body-parser";
import axios from "axios";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) =>{
  const story = await axios.get("https://binaryjazz.us/wp-json/genrenator/v1/story/");
  const genre = await axios.get("https://binaryjazz.us/wp-json/genrenator/v1/genre/");
    res.render("index.ejs", {
    story: story.data,
    genre: genre.data,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
