const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ObjectId } = require("mongodb");
const WSServer = require("express-ws")(app);

const PORT = process.env.PORT ?? 4200;

app.use(express.json({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.ws("/chat/:id/:friendid", (ws, req) => {
  ws.id = req.params.id;
  ws.on("message", async (msg) => {
    const client = new MongoClient(
      "mongodb+srv://Nikita:Gtnhjcjdbx1@cluster0.kjm6fgr.mongodb.net/?retryWrites=true&w=majority"
    );
    const users = client.db().collection("users");
    await client.connect();
    Array.from(WSServer.getWss().clients)
      .filter(
        (socket) =>
          socket.id === req.params.id || socket.id === req.params.friendid
      )
      .forEach((socket) =>
        socket.send(JSON.stringify({ msg, client: req.params.id }))
      );
    const currentUser = await users.findOne({ _id: ObjectId(req.params.id) });
    const friend = await users.findOne({ _id: ObjectId(req.params.friendid) });
    const currentChatHistory = currentUser.messages.some(
      (el) => el.id === req.params.friendid
    );
    const friendChatHistory = friend.messages.some(
      (el) => el.id === req.params.id
    );
    if (currentChatHistory) {
      await users.updateOne(
        {
          _id: ObjectId(req.params.id),
          messages: { $elemMatch: { id: req.params.friendid } },
        },
        { $push: { "messages.$.messages": JSON.parse(msg) } }
      );
      await users.updateOne(
        {
          _id: ObjectId(req.params.friendid),
          messages: { $elemMatch: { id: req.params.id } },
        },
        { $push: { "messages.$.messages": JSON.parse(msg) } }
      );
    } else {
      await users.updateOne(
        { _id: ObjectId(req.params.id) },
        {
          $push: {
            messages: { id: req.params.friendid, messages: [JSON.parse(msg)] },
          },
        }
      );
      await users.updateOne(
        { _id: ObjectId(req.params.friendid) },
        {
          $push: {
            messages: { id: req.params.id, messages: [JSON.parse(msg)] },
          },
        }
      );
    }
  });
});

app.use("/api", require("./routes/routes"));

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});
