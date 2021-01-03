import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * ExamQuestion database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('examQuestion');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const ExamQuestionSchema = new Schema(
    {
      textValue: {
        type: String,
      },
      questionType: {
        type: String,
      },
      answers: [{
        type: Schema.Types.ObjectId,
        ref: 'examAnswer',
      }],
      correctAnswer: {
        type: Schema.Types.ObjectId,
        ref: 'examAnswer',
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

  ExamQuestionSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  ExamQuestionSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  ExamQuestionSchema.set('toJSON', {
    getters: true,
  });

  ExamQuestionSchema.set('toObject', {
    getters: true,
  });

  return database.model('examQuestion', ExamQuestionSchema);
};
