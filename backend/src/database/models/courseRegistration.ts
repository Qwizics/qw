import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * CourseRegistration database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('courseRegistration');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const CourseRegistrationSchema = new Schema(
    {
      attendee: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      course: {
        type: Schema.Types.ObjectId,
        ref: 'course',
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      coursePayment: {
        type: Schema.Types.ObjectId,
        ref: 'coursePayment',
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

  CourseRegistrationSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  CourseRegistrationSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  CourseRegistrationSchema.set('toJSON', {
    getters: true,
  });

  CourseRegistrationSchema.set('toObject', {
    getters: true,
  });

  return database.model('courseRegistration', CourseRegistrationSchema);
};
