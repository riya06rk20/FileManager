
const express = require("express");
const { exec } = require("child_process");
const router = express.Router();

router.post("/", (req, res) => {
    const { path } = req.body;

    exec(`python ../scanner/duplicate_finder.py "${path}"`, (err, stdout) => {
        if (err) return res.status(500).send(err.message);
        res.json(JSON.parse(stdout));
    });
});

module.exports = router;
