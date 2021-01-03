import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Exam database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('exam');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const ExamSchema = new Schema(
    {
      title: {
        type: String,
      },
      questions: [{
        type: Schema.Types.ObjectId,
        ref: 'examQuestion',
      }],
      answersRequired: {
        type: Number,
      },
      passingScore: {
        type: Number,
      },
      course: {
        type: Schema.Types.ObjectId,
        ref: 'course',
      },
      lecture: {
        type: Schema.Types.ObjectId,
        ref: 'courseLecture',
      },
      isRequired: {
        type: Boolean,
        default: false
      },
      examType: {
        type: String,
        enum: [
          "SURVEY",
          "EXAM",
          null
        ],
      },
      tenant: {
        type: Schema.Types.ObjectId,
        ref: 'tenant',
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      importHash: { type: String },
    },
    { timestamps: true },
  );

  ExamSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  ExamSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  ExamSchema.set('toJSON', {
    getters: true,
  });

  ExamSchema.set('toObject', {
    getters: true,
  });

  return database.model('exam', ExamSchema);
};
