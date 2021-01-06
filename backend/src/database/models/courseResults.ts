import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * CourseResults database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
export default (database) => {
  try {
    return database.model('courseResults');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const CourseResultsSchema = new Schema(
    {
      lectures: [{
        type: Schema.Types.ObjectId,
        ref: 'courseLecture',
      }],
      examResults: [{
        type: Schema.Types.ObjectId,
        ref: 'examResult',
      }],
      finalScore: {
        type: Number,
      },
      examTimeRemaining: {
        type: Number,
      },
      courseStatus: {
        type: String,
        enum: [
          "ACTIVE",
          "OPEN",
          "PASSED",
          "FAILED",
          null
        ],
      },
      requiresSurvey: {
        type: Boolean,
        default: false
      },
      surveyResults: {
        type: Schema.Types.ObjectId,
        ref: 'exam',
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

  CourseResultsSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  CourseResultsSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  CourseResultsSchema.set('toJSON', {
    getters: true,
  });

  CourseResultsSchema.set('toObject', {
    getters: true,
  });

  return database.model('courseResults', CourseResultsSchema);
};
