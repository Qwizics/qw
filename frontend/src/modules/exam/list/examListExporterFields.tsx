import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.exam.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.exam.fields.title'),
  },
  {
    name: 'questions',
    label: i18n('entities.exam.fields.questions'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'answersRequired',
    label: i18n('entities.exam.fields.answersRequired'),
  },
  {
    name: 'passingScore',
    label: i18n('entities.exam.fields.passingScore'),
  },
  {
    name: 'course',
    label: i18n('entities.exam.fields.course'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'lecture',
    label: i18n('entities.exam.fields.lecture'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'isRequired',
    label: i18n('entities.exam.fields.isRequired'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'examType',
    label: i18n('entities.exam.fields.examType'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.exam.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.exam.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
