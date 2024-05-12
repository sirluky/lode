import openSocket from "socket.io-client";

const socket = openSocket(process.env.REACT_APP_API_URL);

function on(type, action) {
  socket.on(type, function (d) {
    action(d);
  });
}

const emit = (type, data) => {
  socket.emit(type, data);
};

function onOnce(type) {
  return new Promise(resolve => {
    socket.once(type, function (data) {
      resolve(data);
    });
  });
}

export { emit, on, socket, onOnce };
