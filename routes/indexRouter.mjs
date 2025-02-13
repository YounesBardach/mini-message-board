import { Router } from "express";
import {
  getAllMessages,
  renderNewMessageForm,
  renderDetails,
  addNewMessage,
} from "../controllers/indexController.mjs";

const indexRouter = Router();

indexRouter.get("/", getAllMessages);

indexRouter.get("/new", renderNewMessageForm);

indexRouter.get("/new", renderDetails);

indexRouter.get("/details/:id", renderDetails);

indexRouter.post("/new", addNewMessage);

indexRouter.all("*", (req, res) => {
  res.status(404).render("404");
});

export default indexRouter;
