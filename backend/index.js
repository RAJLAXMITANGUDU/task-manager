const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://rajlaxmitangudu:Laxmi-2002@task-manager.brvbslm.mongodb.net/task-manager?retryWrites=true&w=majority&appName=task-manager"
  )
  .then(() => console.log("DB connected successfully"))
  .catch((e) => console.log(e));

const taskRoutes = require("./routes/task.route");
app.use("/tasks", taskRoutes);
const port = 8082;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});