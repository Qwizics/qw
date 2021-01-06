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
    name: 'user',
    label: i18n('entities.courseRegistration.fields.user'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'coursePayment',
    label: i18n('entities.courseRegistration.fields.coursePayment'),
    render: exporterRenders.relationToOne(),
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
