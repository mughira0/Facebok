import jwt from "jsonwebtoken";

export const handleGenerateToken = (userID) => {
  console.log("handleGnedterateToekn");
  const token = jwt.sign({ userID }, process.env.TOKEN_KEY, {
    expiresIn: "15d",
  });
  console.log(token);
  return token;
};
