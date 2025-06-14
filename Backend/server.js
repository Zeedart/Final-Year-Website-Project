const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
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
    const StudentID = req.params.StudentID;
    const sql = `
        SELECT 
            s.SubjectID, s.SubjectCode, s.Name AS SubjectName, 
            s.Semester, m.MarkID, m.StudentID, m.Mark, m.Passed, m.AttemptNumber 
        FROM subject s 
        JOIN marks m ON s.SubjectID = m.SubjectID 
        WHERE m.StudentID = ? 
        ORDER BY s.Semester, s.SubjectCode;
    `;
    
    db.query(sql, [StudentID], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});


app.post('/student/activate', (req, res) => {
    // Ensure we always return JSON
    res.setHeader('Content-Type', 'application/json');

    // 3. Better request validation
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: "Empty request body",
            solution: "Send JSON with studentId and nationalId"
        });
    }

    // 4. Safe destructuring with defaults
    const { studentId, nationalId } = req.body || {};

    if (!studentId || !nationalId) {
        return res.status(400).json({
            error: "Missing required fields",
            required: {
                studentId: "number",
                nationalId: "string"
            },
            received: req.body
        });
    }

    // 5. Database operation
    const sql = "UPDATE student SET Status = 'Active' WHERE StudentID = ? AND National_ID = ?";
    db.query(sql, [studentId, nationalId], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({
                error: "Database operation failed",
                details: err.message
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                error: "No matching student found",
                suggestion: "Verify StudentID and National_ID combination"
            });
        }

        res.json({
            success: true,
            message: "Student activated successfully",
            studentId,
            nationalId,
            status: "Active"
        });
    });
});

app.listen(8081, () => {
  console.log("✅ Server running on http://localhost:8081");
});
