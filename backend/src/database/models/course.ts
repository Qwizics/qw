import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Course database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('course');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const CourseSchema = new Schema(
    {
      owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      title: {
        type: String,
      },
      price: {
        type: Number,
      },
      lectures: [{
        type: Schema.Types.ObjectId,
        ref: 'courseLecture',
      }],
      courseType: {
        type: String,
      },
      exams: [{
        type: Schema.Types.ObjectId,
        ref: 'exam',
      }],
      examTimeAllowed: {
        type: Number,
      },
      surveyRequired: {
        type: Boolean,
        default: false
      },
      requiresHonorCode: {
        type: Boolean,
        default: false
      },
      honorCodeText: {
        type: String,
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

  CourseSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  CourseSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  CourseSchema.set('toJSON', {
    getters: true,
  });

  CourseSchema.set('toObject', {
    getters: true,
  });

  return database.model('course', CourseSchema);
};
