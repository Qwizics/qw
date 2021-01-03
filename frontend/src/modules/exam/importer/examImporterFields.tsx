import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import examEnumerators from 'src/modules/exam/examEnumerators';

export default [
  {
    name: 'title',
    label: i18n('entities.exam.fields.title'),
    schema: schemas.string(
      i18n('entities.exam.fields.title'),
      {},
    ),
  },
  {
    name: 'questions',
    label: i18n('entities.exam.fields.questions'),
    schema: schemas.relationToMany(
      i18n('entities.exam.fields.questions'),
      {},
    ),
  },
  {
    name: 'answersRequired',
    label: i18n('entities.exam.fields.answersRequired'),
    schema: schemas.integer(
      i18n('entities.exam.fields.answersRequired'),
      {},
    ),
  },
  {
    name: 'passingScore',
    label: i18n('entities.exam.fields.passingScore'),
    schema: schemas.integer(
      i18n('entities.exam.fields.passingScore'),
      {},
    ),
  },
  {
    name: 'course',
    label: i18n('entities.exam.fields.course'),
    schema: schemas.relationToOne(
      i18n('entities.exam.fields.course'),
      {},
    ),
  },
  {
    name: 'lecture',
    label: i18n('entities.exam.fields.lecture'),
    schema: schemas.relationToOne(
      i18n('entities.exam.fields.lecture'),
      {},
    ),
  },
  {
    name: 'isRequired',
    label: i18n('entities.exam.fields.isRequired'),
    schema: schemas.boolean(
      i18n('entities.exam.fields.isRequired'),
      {},
    ),
  },
  {
    name: 'examType',
    label: i18n('entities.exam.fields.examType'),
    schema: schemas.enumerator(
      i18n('entities.exam.fields.examType'),
      {
        "options": examEnumerators.examType
      },
    ),
  },
];