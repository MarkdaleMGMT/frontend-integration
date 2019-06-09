//resets the session
module.exports = async function logout_api(req, res) {
    req.session.reset();
    res.redirect("/");
}
