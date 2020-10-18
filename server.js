const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const server = app.listen(PORT);
const io = require('socket.io').listen(server);

io.on("connection", (socket) => {
  console.log("new connection!")
  // socket.on('checkStart', ({isEditing}) => {
  //   console.log(isEditing)
  //   socket.join('ourStory')

  //     io.to('ourStory').emit('storyData', {message: isEditing})
  //     socket.to('ourStory').emit('message', {message: isEditing})
  // })
  

  socket.on('checkStart', ({isEditing}) => {
    console.log(isEditing)
    socket.join('ourStory')

      io.to('ourStory').emit('storyData', {message: isEditing})
      socket.to('ourStory').emit('message', {message: isEditing})
  })

  socket.on("disconnect", () => {
    console.log("we lost a connection!")
  })
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ourstory");

// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });

