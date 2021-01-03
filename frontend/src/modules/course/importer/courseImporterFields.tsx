import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'owner',
    label: i18n('entities.course.fields.owner'),
    schema: schemas.relationToOne(
      i18n('entities.course.fields.owner'),
      {},
    ),
  },
  {
    name: 'title',
    label: i18n('entities.course.fields.title'),
    schema: schemas.string(
      i18n('entities.course.fields.title'),
      {},
    ),
  },
  {
    name: 'price',
    label: i18n('entities.course.fields.price'),
    schema: schemas.decimal(
      i18n('entities.course.fields.price'),
      {},
    ),
  },
  {
    name: 'lectures',
    label: i18n('entities.course.fields.lectures'),
    schema: schemas.relationToMany(
      i18n('entities.course.fields.lectures'),
      {},
    ),
  },
  {
    name: 'courseType',
    label: i18n('entities.course.fields.courseType'),
    schema: schemas.string(
      i18n('entities.course.fields.courseType'),
      {},
    ),
  },
  {
    name: 'exams',
    label: i18n('entities.course.fields.exams'),
    schema: schemas.relationToMany(
      i18n('entities.course.fields.exams'),
      {},
    ),
  },
  {
    name: 'examTimeAllowed',
    label: i18n('entities.course.fields.examTimeAllowed'),
    schema: schemas.integer(
      i18n('entities.course.fields.examTimeAllowed'),
      {},
    ),
  },
  {
    name: 'surveyRequired',
    label: i18n('entities.course.fields.surveyRequired'),
    schema: schemas.boolean(
      i18n('entities.course.fields.surveyRequired'),
      {},
    ),
  },
  {
    name: 'requiresHonorCode',
    label: i18n('entities.course.fields.requiresHonorCode'),
    schema: schemas.boolean(
      i18n('entities.course.fields.requiresHonorCode'),
      {},
    ),
  },
  {
    name: 'honorCodeText',
    label: i18n('entities.course.fields.honorCodeText'),
    schema: schemas.string(
      i18n('entities.course.fields.honorCodeText'),
      {},
    ),
  },
];