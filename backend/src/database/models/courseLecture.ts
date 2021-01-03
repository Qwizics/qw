import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * CourseLecture database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('courseLecture');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const CourseLectureSchema = new Schema(
    {
      lectureTitle: {
        type: String,
      },
      lectureType: {
        type: String,
      },
      lectureUrl: {
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

  CourseLectureSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  CourseLectureSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  CourseLectureSchema.set('toJSON', {
    getters: true,
  });

  CourseLectureSchema.set('toObject', {
    getters: true,
  });

  return database.model('courseLecture', CourseLectureSchema);
};
