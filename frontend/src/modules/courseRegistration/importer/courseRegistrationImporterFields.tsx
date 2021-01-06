import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

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
    name: 'user',
    label: i18n('entities.courseRegistration.fields.user'),
    schema: schemas.relationToOne(
      i18n('entities.courseRegistration.fields.user'),
      {},
    ),
  },
  {
    name: 'coursePayment',
    label: i18n('entities.courseRegistration.fields.coursePayment'),
    schema: schemas.relationToOne(
      i18n('entities.courseRegistration.fields.coursePayment'),
      {},
    ),
  },
];