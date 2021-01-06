import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import examAnswerEnumerators from 'src/modules/examAnswer/examAnswerEnumerators';

export default [
  {
    name: 'answerText',
    label: i18n('entities.examAnswer.fields.answerText'),
    schema: schemas.string(
      i18n('entities.examAnswer.fields.answerText'),
      {},
    ),
  },
  {
    name: 'order',
    label: i18n('entities.examAnswer.fields.order'),
    schema: schemas.string(
      i18n('entities.examAnswer.fields.order'),
      {},
    ),
  },
  {
    name: 'answerType',
    label: i18n('entities.examAnswer.fields.answerType'),
    schema: schemas.enumerator(
      i18n('entities.examAnswer.fields.answerType'),
      {
        "options": examAnswerEnumerators.answerType
      },
    ),
  },
];