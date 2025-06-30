const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

const router = require("express").Router();
const upload = require("../config/multerConfig");
router.get("/", getTasks);
router.post("/", upload.single("pdf"), createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;