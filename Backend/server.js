const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "",
    database: "university_db"
})

app.get('/', (re, res) => {
    return res.json("From Backend")
})

app.get("/students", (req, res) => {
    const sql = "SELECT * FROM students"
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get("/subject/:Major", (req, res) => {
    const majorId = req.params.Major;           // get Major from URL
    const sql = "SELECT * FROM subject WHERE MajorID = ? OR MajorID IS NULL";
    db.query(sql, [majorId], (err, data) => {   // pass majorId as parameter
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8081, ()=> {
    console.log("Listening")
})