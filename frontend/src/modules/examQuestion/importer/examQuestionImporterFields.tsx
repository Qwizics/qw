import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'textValue',
    label: i18n('entities.examQuestion.fields.textValue'),
    schema: schemas.string(
      i18n('entities.examQuestion.fields.textValue'),
      {},
    ),
  },
  {
    name: 'questionType',
    label: i18n('entities.examQuestion.fields.questionType'),
    schema: schemas.string(
      i18n('entities.examQuestion.fields.questionType'),
      {},
    ),
  },
  {
    name: 'answers',
    label: i18n('entities.examQuestion.fields.answers'),
    schema: schemas.relationToMany(
      i18n('entities.examQuestion.fields.answers'),
      {},
    ),
  },
  {
    name: 'correctAnswer',
    label: i18n('entities.examQuestion.fields.correctAnswer'),
    schema: schemas.relationToOne(
      i18n('entities.examQuestion.fields.correctAnswer'),
      {},
    ),
  },
];