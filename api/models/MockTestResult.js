import mongoose from 'mongoose';

const MockTestResultSchema = new mongoose.Schema({
  mockTestId: { type: mongoose.Schema.Types.ObjectId, ref: 'MockTest' },
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  userAnswer: String,
  isCorrect: Boolean
});

export default mongoose.models.MockTestResult || mongoose.model('MockTestResult', MockTestResultSchema);

