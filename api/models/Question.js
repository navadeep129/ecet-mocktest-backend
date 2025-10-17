import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  subject: String,
  chapter: String,
  questionText: String,
  options: [String],
  correctAnswer: String,
  explanation: String
});

export default mongoose.models.Question || mongoose.model('Question', QuestionSchema);
