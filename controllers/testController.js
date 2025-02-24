export const testPostController = (req, res) => {
    const {name}  = req.body;
    res.send(`Hello ${name}`);

};