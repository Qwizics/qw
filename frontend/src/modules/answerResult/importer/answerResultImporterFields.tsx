import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'answer',
    label: i18n('entities.answerResult.fields.answer'),
    schema: schemas.relationToOne(
      i18n('entities.answerResult.fields.answer'),
      {},
    ),
  },
  {
    name: 'question',
    label: i18n('entities.answerResult.fields.question'),
    schema: schemas.relationToOne(
      i18n('entities.answerResult.fields.question'),
      {},
    ),
  },
  {
    name: 'user',
    label: i18n('entities.answerResult.fields.user'),
    schema: schemas.relationToOne(
      i18n('entities.answerResult.fields.user'),
      {},
    ),
  },
];