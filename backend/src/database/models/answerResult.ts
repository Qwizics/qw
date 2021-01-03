import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * AnswerResult database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('answerResult');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const AnswerResultSchema = new Schema(
    {
      answer: {
        type: Schema.Types.ObjectId,
        ref: 'examAnswer',
      },
      question: {
        type: Schema.Types.ObjectId,
        ref: 'examQuestion',
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
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

  AnswerResultSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  AnswerResultSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  AnswerResultSchema.set('toJSON', {
    getters: true,
  });

  AnswerResultSchema.set('toObject', {
    getters: true,
  });

  return database.model('answerResult', AnswerResultSchema);
};
