const express = require("express");
const app = express();
const server = require("http").Server(app);

const io = (module.exports.io = require("socket.io")(server, {
  handlePreflightRequest: (req, res) => {
    const headers = {
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
    };
    res.writeHead(200, headers);
    res.end();
  }
}));


const PORT = process.env.PORT || 8080;
// app.use(express.static(__dirname + "/build"));
const _ = require("lodash");
const {
  HIT,
  SHOOT,
  CHANGE_STATUS,
  PLAYER_READY,
  GAME_PLACEMENT_STARTS,
  JOIN_GAME
} = require("./types");
let gameRooms = [];
let players = [];
let joiningQuote = [];
let friendQuote = [];
let prazdnyBoard = BlankBoard();

server.listen(PORT, () => {
  console.log("port: ", PORT);
});
function findPlayer(id) {
  return _.find(players, p => p.id === id);
}

class Room {
  constructor(p1id, p2id) {
    this.p1id = p1id;
    this.p2id = p2id;
    this.turn = true;
    this.id = Math.random() * 100000000;
    // console.log(this,players);

    PlayerJoin(findPlayer(p1id), this);
    PlayerJoin(findPlayer(p2id), this);
  }
}
function PlayerJoin(plr, room) {
  plr.room = room;
  if (plr.id === plr.room.p1id) {
    plr.onturn = true;
    plr.opponent = findPlayer(plr.room.p2id);
  } else {
    onturn = false;
    plr.onturn = true;

    plr.opponent = findPlayer(plr.room.p1id);
  }
  console.log("Created room for: " + plr.nick, plr.opponent.nick);
  io.to(plr.id).emit(
    GAME_PLACEMENT_STARTS,
    /* Opponents player informations */
    {
      nick: plr.opponent.nick,
      myboard: plr.board,
      enemyboard: plr.opponent.board
    }
  );
}

let giveRoom = (joinID, id) => {
  console.log("getting room", joinID, id);

  if (joinID !== undefined) {
    let friendindex = _.findIndex(friendQuote, f => f === joinID);
    if (friendindex > -1) {
      friend = friendQuote[friendindex];
      friendQuote.splice(friendindex, 1);
      gameRooms.push(new Room(id, friend));
    }
  } else {
    if (joiningQuote.length > 0) {
      gameRooms.push(new Room(id, joiningQuote[0]));
      joiningQuote.splice(0, 1);
    } else {
      joiningQuote.push(id);
    }
  }
};
io.on("connection", function(socket) {
  // io.emit('new player', {
  //   name:'sirluky5'
  // });

  socket.on(JOIN_GAME, function(data) {
    let playerdata = {
      nick: data.nick,
      board: BlankBoard(),
      // room,
      id: socket.id
    };
    if (_.findIndex(players, p => p.id === playerdata.id) < 0) {
      players.push(playerdata);
      let room = giveRoom(data.joinTo, socket.id);
    }
  });

  socket.on(SHOOT, function(pos) {
    let player = findPlayer(socket.id);
    if (player !== undefined) {
      // console.log("delayed")
      let opponent = player.opponent;
      let shiphit = false;
      if (opponent.board[pos].type === "lod"){
        opponent.board[pos].type = "shiphit";
        shiphit = true;
        if(checkWin(opponent.board)){
          shiphit = "win"
        }
      }

      io.to(player.id).emit(SHOOT, shiphit);
      io.to(opponent.id).emit(HIT, { shiphit, pos: pos });
      
      
    }
  });
  // setInterval(() => {
  //   let pos = Math.floor(Math.random() * 100);
  //   console.log(pos)
  // socket.emit(HIT, pos);

  // },1000)
  // io.emit('CHANGE_STATUS', 10 + Math.floor(Math.random() * 9));
  // io.emit('CHANGE_STATUS');
  // socket.on('private message', function (from, msg) {
  //   console.log('I received a private message by ', from, ' saying ', msg);
  // });
  socket.on(PLAYER_READY, function(data, a) {
    let player = findPlayer(socket.id);
    if (player !== undefined && player.room !== undefined) {
      let playerStart = player.onturn === player.room.turn;
      let opponent = player.opponent;
      // console.log(data,a)
      data.ships.forEach(ship => {
        player.board = placeShip(player.board, 10, ship);
        player.ready = true;
      });
      // console.log(player.board,opponent.board)
      // console.log("will it crash ?")

      if (opponent.ready === true) {
        // io.to(player.id).emit(CHANGE_STATUS, { onturn: playerStart, enemyboard: opponent.board, myboard: player.board })
        // io.to(opponent.id).emit(CHANGE_STATUS, { onturn: !playerStart, enemyboard: player.board, myboard: opponent.board })
        io.to(player.id).emit(CHANGE_STATUS, {
          onturn: playerStart,
          enemyboard: prazdnyBoard,
          myboard: player.board
        });
        io.to(opponent.id).emit(CHANGE_STATUS, {
          onturn: !playerStart,
          enemyboard: prazdnyBoard,
          myboard: opponent.board
        });
      }
    }
  });
  socket.on("disconnect", function() {
    io.emit("user disconnected");
  });

  // setInterval(() => {
  //   io.emit('hello', 10+Math.floor(Math.random()*9));
  // },100)
  console.log("connected");
});

console.log(
  "server is running " +
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds()
);
console.log("running on port:", process.env.PORT || 8080);

// import { rotateGrid } from "../functions/functions";

/**
 *
 * @param {*} arr pole na ktere chcete umistit objekt [{type: "blank", id:"0"}], bude nahrazeno na danych pozicich {type:"lod", id: -mu bude prideleno podle zadanych parametru}
 * @param {*} size sirka pole
 * @param {*} model 2d model lodi: [[0,0,0],[0,1,0],[0,1,0]]
 * @param {*} id id lodi 0 => neni lod
 * @param {*} pos 1d pozice pro umisteni lodi
 * @param {*} rotation rotace pole 1 - nic, 2 - 90deg, 3 - 180deg, 4 - 270deg
 *
 *
function placeShip(arr, size = 10, ship) {
  // console.log(ship);
  // let toDelete = [];
  // console.log(ship.pos);
  // if (ship.pos % 10 > 0 && ship.pos % 10 < 9) {
    // if (ship.prev.pos !== null) {
    //   let prevship = rotateGrid(ship.dmodel, ship.prev.rotation);
    //   prevship.forEach((row, oy) =>
    //     row.forEach((cell, ox) => {
    //       if (cell === 1) {
    //         let cellPos = ship.prev.pos + oy * size + ox - 11;
    //         // const arrcell = arr[cellPos];
    //         // if (arrcell.id == ship.id) {
    //         toDelete.push(cellPos);
    //         // }
    //       }
    //     })
    //   );
    // }

    ship.cmodel.forEach((row, ty) =>
      row.forEach((modelcell, tx) => {
        if (modelcell !== 0) {
          let cpos = ty * size + ship.pos + tx;
          cpos -= 11;

          // let toSplice = null;

          // toDelete.forEach((e, index) => {
          //   if (e === cpos) {
          //     toSplice = index;
          //   }
          // });

          // if (toSplice !== null) {
          //   toDelete.splice(toSplice, 1);
          // }
          arr[cpos] = { id: ship.id, type: "lod" };
        }
      })
    );
    // toDelete.forEach(index => {
    //   arr[index] = { id: 0, type: "blank" };
    // });
    // const last = arr[ty * size + ship.pos + tx];
  // }
  return arr;
}
*/

//net version
function placeShip(arr, size = 10, ship) {
  ship.cmodel.forEach((row, ty) =>
    row.forEach((modelcell, tx) => {
      if (modelcell !== 0) {
        let cpos = ty * size + ship.pos + tx;
        cpos -= size - 1;

        // let toSplice = null;

        // toDelete.forEach((e, index) => {
        //   if (e === cpos) {
        //     toSplice = index;
        //   }
        // });

        // if (toSplice !== null) {
        //   toDelete.splice(toSplice, 1);
        // }
        arr[cpos] = { id: ship.id, type: "lod" };
      }
    })
  );
  // toDelete.forEach(index => {
  //   arr[index] = { id: 0, type: "blank" };
  // });
  // const last = arr[ty * size + ship.pos + tx];

  return arr;
}

function BlankBoard() {
  let board = [];
  for (let i = 0; i < 10; i++) {
    for (let o = 0; o < 10; o++) {
      board.push({
        id: "0",
        type: "blank"
      });
    }
  }

  return board;
}
function checkWin(board) {
  let win = true;
  board.forEach(b => {
    if(b.type === "lod")
      win = false;
      
  })
  
  return win;
}