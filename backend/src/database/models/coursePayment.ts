import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * CoursePayment database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('coursePayment');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const CoursePaymentSchema = new Schema(
    {
      transaction: {
        type: String,
      },
      payment: {
        type: Number,
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

  CoursePaymentSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  CoursePaymentSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  CoursePaymentSchema.set('toJSON', {
    getters: true,
  });

  CoursePaymentSchema.set('toObject', {
    getters: true,
  });

  return database.model('coursePayment', CoursePaymentSchema);
};
