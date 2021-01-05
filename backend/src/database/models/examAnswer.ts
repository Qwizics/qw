import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * ExamAnswer database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('examAnswer');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const ExamAnswerSchema = new Schema(
    {
      answerText: {
        type: String,
      },
      order: {
        type: String,
      },
      answerType: {
        type: String,
        enum: [
          "MULT_ONE",
          "MULT_RATING",
          "MULT_OR",
          "MULT_AND",
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

  ExamAnswerSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  ExamAnswerSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  ExamAnswerSchema.set('toJSON', {
    getters: true,
  });

  ExamAnswerSchema.set('toObject', {
    getters: true,
  });

  return database.model('examAnswer', ExamAnswerSchema);
};
