import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * ExamResult database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('examResult');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const ExamResultSchema = new Schema(
    {
      questions: [{
        type: Schema.Types.ObjectId,
        ref: 'examQuestion',
      }],
      status: {
        type: String,
      },
      lecture: {
        type: Schema.Types.ObjectId,
        ref: 'courseLecture',
      },
      course: {
        type: Schema.Types.ObjectId,
        ref: 'courseRegistration',
      },
      answers: [{
        type: Schema.Types.ObjectId,
        ref: 'answerResult',
      }],
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

  ExamResultSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  ExamResultSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  ExamResultSchema.set('toJSON', {
    getters: true,
  });

  ExamResultSchema.set('toObject', {
    getters: true,
  });

  return database.model('examResult', ExamResultSchema);
};
