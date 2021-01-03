import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.examAnswer.fields.id'),
  },
  {
    name: 'answerText',
    label: i18n('entities.examAnswer.fields.answerText'),
  },
  {
    name: 'order',
    label: i18n('entities.examAnswer.fields.order'),
  },
  {
    name: 'answerType',
    label: i18n('entities.examAnswer.fields.answerType'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.examAnswer.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.examAnswer.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
