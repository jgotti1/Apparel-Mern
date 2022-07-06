import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  regNo: Number,
  studentName: String,
  grade: String,
  location: {
    type: String,
    default: "location",
  },
});

const student = mongoose.model("student", studentSchema);

export default student;
