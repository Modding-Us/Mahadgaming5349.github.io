import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
dotenv.config({ path: "../.env" });

const app = express();
const port = 3001;

// Allow express to parse JSON bodies
app.use(express.json());

app.post("/api/token", async (req, res) => {
  
  // Exchange the code for an access_token
  const response = await fetch(`https://discord.com/api/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: process.env.1311372319268012032,
      client_secret: process.env.d9Sej_DX9bS9ucab04JGbNt5lGs4j8kD,
      grant_type: "authorization_code",
      code: req.body.code,
    }),
  });

  // Retrieve the access_token from the response
  const { MTMxMTM3MjMxOTI2ODAxMjAzMg.GCuN04.Vg4II85xwNUbldyPUMp4fVEClLEE7HmDgnhQuM } = await response.json();

  // Return the access_token to our client as { access_token: "..."}
  res.send({MTMxMTM3MjMxOTI2ODAxMjAzMg.GCuN04.Vg4II85xwNUbldyPUMp4fVEClLEE7HmDgnhQuM});
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
