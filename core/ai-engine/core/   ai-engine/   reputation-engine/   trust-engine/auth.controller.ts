import { generateToken } from "./auth.service";

export const login = async (req, res) => {
  const { email } = req.body;

  // simplified for foundation stage
  const user = { id: "temp-user-id", email };

  const token = generateToken(user.id);

  res.json({
    token,
    user,
  });
};
