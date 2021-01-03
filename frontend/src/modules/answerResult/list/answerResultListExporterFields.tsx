import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.answerResult.fields.id'),
  },
  {
    name: 'answer',
    label: i18n('entities.answerResult.fields.answer'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'question',
    label: i18n('entities.answerResult.fields.question'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'user',
    label: i18n('entities.answerResult.fields.user'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.answerResult.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.answerResult.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
