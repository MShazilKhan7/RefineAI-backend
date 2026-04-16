const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoutes = require("./routes/auth.routes");

const jobRoutes = require("./routes/job.routes.js");
const resumeRoutes = require("./routes/resume.routes.js");
const aiRoutes = require("./routes/ai.routes.js");
const interviewRoutes = require("./routes/interview.routes.js");
const protect = require("../src/middlewares/auth.middleware.js");
const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "http://localhost:5001",
      "http://localhost:5173",
    ],
    credentials: true,
  }),
); // Enable CORS
app.use(morgan("dev")); // Logging
app.use(express.json()); // Body parser
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Auth System API" });
});

app.use("/api/auth", authRoutes);

app.use("/api/jobs", jobRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/ai", aiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

module.exports = app;
