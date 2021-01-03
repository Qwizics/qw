import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.courseLecture.fields.id'),
  },
  {
    name: 'lectureTitle',
    label: i18n('entities.courseLecture.fields.lectureTitle'),
  },
  {
    name: 'lectureType',
    label: i18n('entities.courseLecture.fields.lectureType'),
  },
  {
    name: 'lectureUrl',
    label: i18n('entities.courseLecture.fields.lectureUrl'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.courseLecture.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.courseLecture.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
