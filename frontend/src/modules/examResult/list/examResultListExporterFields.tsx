import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.examResult.fields.id'),
  },
  {
    name: 'questions',
    label: i18n('entities.examResult.fields.questions'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'status',
    label: i18n('entities.examResult.fields.status'),
  },
  {
    name: 'lecture',
    label: i18n('entities.examResult.fields.lecture'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'course',
    label: i18n('entities.examResult.fields.course'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'answers',
    label: i18n('entities.examResult.fields.answers'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.examResult.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.examResult.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
