import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import courseResultsEnumerators from 'src/modules/courseResults/courseResultsEnumerators';

export default [
  {
    name: 'lectures',
    label: i18n('entities.courseResults.fields.lectures'),
    schema: schemas.relationToMany(
      i18n('entities.courseResults.fields.lectures'),
      {},
    ),
  },
  {
    name: 'examResults',
    label: i18n('entities.courseResults.fields.examResults'),
    schema: schemas.relationToMany(
      i18n('entities.courseResults.fields.examResults'),
      {},
    ),
  },
  {
    name: 'finalScore',
    label: i18n('entities.courseResults.fields.finalScore'),
    schema: schemas.integer(
      i18n('entities.courseResults.fields.finalScore'),
      {},
    ),
  },
  {
    name: 'examTimeRemaining',
    label: i18n('entities.courseResults.fields.examTimeRemaining'),
    schema: schemas.integer(
      i18n('entities.courseResults.fields.examTimeRemaining'),
      {},
    ),
  },
  {
    name: 'courseStatus',
    label: i18n('entities.courseResults.fields.courseStatus'),
    schema: schemas.enumerator(
      i18n('entities.courseResults.fields.courseStatus'),
      {
        "options": courseResultsEnumerators.courseStatus
      },
    ),
  },
  {
    name: 'requiresSurvey',
    label: i18n('entities.courseResults.fields.requiresSurvey'),
    schema: schemas.boolean(
      i18n('entities.courseResults.fields.requiresSurvey'),
      {},
    ),
  },
  {
    name: 'surveyResults',
    label: i18n('entities.courseResults.fields.surveyResults'),
    schema: schemas.relationToOne(
      i18n('entities.courseResults.fields.surveyResults'),
      {},
    ),
  },
];