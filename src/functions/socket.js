import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:9378");
// function subscribeToTimer(cb) {
//   socket.on("timer", timestamp => cb(null, timestamp));
//   socket.emit("subscribeToTimer", 1000);
// }
function on(type, akce) {
  socket.on(type, function(d) {
    akce(d);
  });
}

let emit = (type, data) => {
  socket.emit(type, data);
  // console.log(socket);
};

export { emit, on };
