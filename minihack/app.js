const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/newGame.html");
});

app.get("/game/:gameId", (req, res) => {
    const gameId = req.params.gameId;
    const gameList = JSON.parse(fs.readFileSync("./games.json", "utf-8"));
    
    const game = gameList.filter(gameItem => {
        return gameItem.id == gameId;
    })[0];

    if (game) {
        let htmlData = fs.readFileSync("./views/playGame.html", "utf-8");
        
        const playerNameHtml = game.players.map(player => {
            return `<th scope="col">${player}</th>`;
        }).join('');

        const playerTotalScoreHtml = `
            <th scope="col">0</th>
            <th scope="col">0</th>
            <th scope="col">0</th>
            <th scope="col">0</th>
        `;

        const rowHtml = game.rows.map((row, index) => {
            return `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>
                        <input class="form-control" type="number" value="0">
                    </td>
                    <td>
                        <input class="form-control" type="number" value="0">
                    </td>
                    <td>
                        <input class="form-control" type="number" value="0">
                    </td>
                    <td>
                        <input class="form-control" type="number" value="0">
                    </td>
                </tr>
            `
        });
        
        htmlData = htmlData.replace("{{player_names}}", playerNameHtml);
        htmlData = htmlData.replace("{{player_total_scores}}", playerTotalScoreHtml);
        htmlData = htmlData.replace("{{rows}}", rowHtml);
        // console.log(game);
        res.send(htmlData);
    } else {
        res.send("Game không tồn tại!");
    }
});

app.post("/add-new-row", (req, res) => {
    const gameList = JSON.parse(fs.readFileSync("./games.json", "utf-8"));
    const gameId = req.body.gameId;

    for (let i = 0; i < gameList.length; i++) {
        if (gameList[i].id == gameId) {
            gameList[i].rows.push([0,0,0,0]);
        }
    };

    fs.writeFileSync("./games.json", JSON.stringify(gameList));
    res.send("Add row success!");
});

app.post("/create-game", (req, res) => {
    const gameList = JSON.parse(fs.readFileSync("./games.json", "utf-8"));

    let newGameId = 1;

    if (gameList.length > 0) {
        newGameId = gameList[gameList.length - 1].id + 1;
    }

    const newGame = {
        id: newGameId,
        players: req.body.players,
        rows: []
    };

    gameList.push(newGame);

    fs.writeFileSync("./games.json", JSON.stringify(gameList));
    res.redirect(`/game/${newGameId}`);
});

app.use(express.static("public"));

app.listen(6969, (err) => {
    if (err) console.log(err)
    else console.log("Server start success");
});