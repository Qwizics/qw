import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import courseRegistrationEnumerators from 'src/modules/courseRegistration/courseRegistrationEnumerators';

export default [
  {
    name: 'attendee',
    label: i18n('entities.courseRegistration.fields.attendee'),
    schema: schemas.relationToOne(
      i18n('entities.courseRegistration.fields.attendee'),
      {},
    ),
  },
  {
    name: 'course',
    label: i18n('entities.courseRegistration.fields.course'),
    schema: schemas.relationToOne(
      i18n('entities.courseRegistration.fields.course'),
      {},
    ),
  },
  {
    name: 'courseStatus',
    label: i18n('entities.courseRegistration.fields.courseStatus'),
    schema: schemas.enumerator(
      i18n('entities.courseRegistration.fields.courseStatus'),
      {
        "options": courseRegistrationEnumerators.courseStatus
      },
    ),
  },
  {
    name: 'user',
    label: i18n('entities.courseRegistration.fields.user'),
    schema: schemas.relationToOne(
      i18n('entities.courseRegistration.fields.user'),
      {},
    ),
  },
  {
    name: 'examTimeRemaining',
    label: i18n('entities.courseRegistration.fields.examTimeRemaining'),
    schema: schemas.integer(
      i18n('entities.courseRegistration.fields.examTimeRemaining'),
      {},
    ),
  },
  {
    name: 'finalScore',
    label: i18n('entities.courseRegistration.fields.finalScore'),
    schema: schemas.integer(
      i18n('entities.courseRegistration.fields.finalScore'),
      {},
    ),
  },
  {
    name: 'survey',
    label: i18n('entities.courseRegistration.fields.survey'),
    schema: schemas.relationToOne(
      i18n('entities.courseRegistration.fields.survey'),
      {},
    ),
  },
  {
    name: 'hasHonorCode',
    label: i18n('entities.courseRegistration.fields.hasHonorCode'),
    schema: schemas.boolean(
      i18n('entities.courseRegistration.fields.hasHonorCode'),
      {},
    ),
  },
];