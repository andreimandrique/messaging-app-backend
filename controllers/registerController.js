const registerPost = (req, res) => {
  const { username, password, confirmPassword } = req.body;

  res.status(200).json(req.body);
};

export { registerPost };
