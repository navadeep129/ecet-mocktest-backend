import mongoose from 'mongoose';

const MockTestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  mode: { type: String, enum: ['persistent', 'dynamic'], required: true },
  subject: String,
  chapters: [String],
  totalQuestions: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.MockTest || mongoose.model('MockTest', MockTestSchema);
