const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

export const getAllMessages = (req, res) => {
  res.render("index", { messages });
};

export const renderNewMessageForm = (req, res) => {
  res.render("form");
};

export const renderDetails = (req, res) => {
  const { id: index } = req.params;
  const message = messages[index];

  if (!message) {
    return res.status(404).render("404");
  }

  res.render("details", { message });
};

export const addNewMessage = (req, res) => {
  const { user, text } = req.body;

  if (!user || !text) {
    return res.status(400).send("All fields are required!");
  }

  messages.push({
    text,
    user,
    added: new Date(),
  });

  res.redirect("/");
};
