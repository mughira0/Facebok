/**
 * ? Signup Controller
 **/
export const handleSignUp = (req, res) => {
  try {
    res.send({
      status: true,
      message: "Signup Api",
    });
  } catch (err) {
    res.send({
      status: false,
      error: err,
    });
  }
};
/**
 * ? Login Controller
 **/
export const handleLoginUp = (req, res) => {
  try {
    res.send({
      status: true,
      message: "Login Api",
    });
  } catch (err) {
    res.send({
      status: false,
      error: err,
    });
  }
};
/**
 * ? Logout Controller
 **/
export const handleLogout = (req, res) => {
  try {
    res.send({
      status: true,
      message: "Logout Api",
    });
  } catch (err) {
    res.send({
      status: false,
      error: err,
    });
  }
};
