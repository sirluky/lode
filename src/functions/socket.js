import openSocket from "socket.io-client";
const socket = openSocket('http://localhost:8080' /*"https://lode-server.herokuapp.com/" */);
// const socket = openSocket("https://8080-bakespinelessgopher.cdr.co/");
console.log(process.env.NODE_ENV)

// function subscribeToTimer(cb) {
//   socket.on("timer", timestamp => cb(null, timestamp));
//   socket.emit("subscribeToTimer", 1000);
// }
function on(type, akce) {
  socket.on(type, function (d) {
    akce(d);
  });
}

let emit = (type, data) => {
  socket.emit(type, data);
  // console.log(socket);
};
/**
 *
 * @param {*} type typ eventu
 *
 */
function onOnce(type) {
  return new Promise(resolve => {
    socket.once(type, function (data) {
      resolve(data);
    });
  });
}

export { emit, on, socket, onOnce };
