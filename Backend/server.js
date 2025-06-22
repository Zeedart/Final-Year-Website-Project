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
    // Ensure JSON response
    res.setHeader('Content-Type', 'application/json');

    // Validate request body
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: "Empty request body",
            solution: "Send JSON with studentId and nationalId"
        });
    }

    // Destructure with defaults
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

    // First check the student's current status
    const checkSql = `
        SELECT Status 
        FROM student 
        WHERE StudentID = ? 
          AND National_ID = ?
    `;

    db.query(checkSql, [studentId, nationalId], (checkErr, checkResult) => {
        if (checkErr) {
            console.error('Database error:', checkErr);
            return res.status(500).json({
                error: "Database verification failed",
                details: checkErr.message
            });
        }

        if (checkResult.length === 0) {
            // Student doesn't exist
            return res.status(404).json({
                error: "No matching student found",
                suggestion: "Verify StudentID and National_ID combination"
            });
        }

        const currentStatus = checkResult[0].Status;

        if (currentStatus === 'Suspended') {
            return res.status(403).json({
                error: "Cannot activate a suspended student",
                solution: "Contact administrator to resolve suspension"
            });
        }

        if (currentStatus === 'Active') {
            return res.status(400).json({
                error: "Student is already active",
                currentStatus: currentStatus
            });
        }

        // Only proceed if status is 'Inactive'
        if (currentStatus === 'Inactive') {
            const updateSql = `
                UPDATE student 
                SET Status = 'Active' 
                WHERE StudentID = ? 
                  AND National_ID = ? 
                  AND Status = 'Inactive'
            `;

            db.query(updateSql, [studentId, nationalId], (err, result) => {
                if (err) {
                    console.error('Database error:', err);
                    return res.status(500).json({
                        error: "Database operation failed",
                        details: err.message
                    });
                }

                if (result.affectedRows > 0) {
                    return res.json({
                        success: true,
                        message: "Student activated successfully",
                        studentId,
                        nationalId,
                        status: "Active"
                    });
                } else {
                    return res.status(400).json({
                        error: "Activation failed",
                        details: "Student status may have changed during processing"
                    });
                }
            });
        } else {
            return res.status(400).json({
                error: "Unexpected student status",
                currentStatus: currentStatus,
                expected: "Inactive"
            });
        }
    });
});

app.listen(8081, () => {
  console.log("✅ Server running on http://localhost:8081");
});
