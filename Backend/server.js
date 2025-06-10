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

app.get("/student/:StudentID", (req, res) => {
    const StudentID = req.params.StudentID
    const sql = "SELECT * FROM student WHERE StudentID = ?"
    db.query(sql, [StudentID], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get("/student", (req, res) => {
    const { id, national } = req.query;
    const sql = "SELECT * FROM student WHERE StudentID = ? AND National_ID = ?";
    db.query(sql, [id, national], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});


app.get("/subject/:Major", (req, res) => {
    const majorId = req.params.Major;           // get Major from URL
    const sql = "SELECT * FROM subject WHERE MajorID = ? OR MajorID IS NULL";
    db.query(sql, [majorId], (err, data) => {   // pass majorId as parameter
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get("/marks/:StudentID", (req, res) => {
    const StudentID = req.params.StudentID;           // get Major from URL
    const sql = `SELECT s.SubjectID, s.SubjectCode, s.Name AS SubjectName, s.Semester, m.MarkID, m.StudentID, m.Mark, m.Passed, m.AttemptNumber FROM  subject s JOIN  marks m ON s.SubjectID = m.SubjectID WHERE  m.StudentID = ${StudentID}  -- Replace with your student ID ORDER BY  s.Semester, s.SubjectCode;`
    db.query(sql, [StudentID], (err, data) => {   // pass majorId as parameter
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8081, ()=> {
    console.log("Listening")
})