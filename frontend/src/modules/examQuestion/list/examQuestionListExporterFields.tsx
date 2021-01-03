import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.examQuestion.fields.id'),
  },
  {
    name: 'textValue',
    label: i18n('entities.examQuestion.fields.textValue'),
  },
  {
    name: 'questionType',
    label: i18n('entities.examQuestion.fields.questionType'),
  },
  {
    name: 'answers',
    label: i18n('entities.examQuestion.fields.answers'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'correctAnswer',
    label: i18n('entities.examQuestion.fields.correctAnswer'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.examQuestion.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.examQuestion.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
