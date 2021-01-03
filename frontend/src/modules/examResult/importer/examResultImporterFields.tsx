import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'questions',
    label: i18n('entities.examResult.fields.questions'),
    schema: schemas.relationToMany(
      i18n('entities.examResult.fields.questions'),
      {},
    ),
  },
  {
    name: 'status',
    label: i18n('entities.examResult.fields.status'),
    schema: schemas.string(
      i18n('entities.examResult.fields.status'),
      {},
    ),
  },
  {
    name: 'lecture',
    label: i18n('entities.examResult.fields.lecture'),
    schema: schemas.relationToOne(
      i18n('entities.examResult.fields.lecture'),
      {},
    ),
  },
  {
    name: 'course',
    label: i18n('entities.examResult.fields.course'),
    schema: schemas.relationToOne(
      i18n('entities.examResult.fields.course'),
      {},
    ),
  },
  {
    name: 'answers',
    label: i18n('entities.examResult.fields.answers'),
    schema: schemas.relationToMany(
      i18n('entities.examResult.fields.answers'),
      {},
    ),
  },
];