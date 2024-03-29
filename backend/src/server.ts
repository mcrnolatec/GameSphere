import express from "express";
import cors from "cors";
import {sample_games} from "./data";
import RestGames from './services/rest/restGames';
import RestUsers from "./services/rest/restUsers";

const app = express();

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/games", (req, res) => {
    res.send(sample_games);
})

app.get('/games', (req, res) => {
    const restGames = new RestGames();
    restGames.getGames(req, res);
});

app.get('/users/ihorvat', (req, res) => {
    const restUsers = new RestUsers();
    restUsers.getUserByUsernameAndPassword(req, res);
});

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})