import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.courseRegistration.fields.id'),
  },
  {
    name: 'attendee',
    label: i18n('entities.courseRegistration.fields.attendee'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'course',
    label: i18n('entities.courseRegistration.fields.course'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'courseStatus',
    label: i18n('entities.courseRegistration.fields.courseStatus'),
  },
  {
    name: 'user',
    label: i18n('entities.courseRegistration.fields.user'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'examTimeRemaining',
    label: i18n('entities.courseRegistration.fields.examTimeRemaining'),
  },
  {
    name: 'finalScore',
    label: i18n('entities.courseRegistration.fields.finalScore'),
  },
  {
    name: 'survey',
    label: i18n('entities.courseRegistration.fields.survey'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'hasHonorCode',
    label: i18n('entities.courseRegistration.fields.hasHonorCode'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.courseRegistration.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.courseRegistration.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
