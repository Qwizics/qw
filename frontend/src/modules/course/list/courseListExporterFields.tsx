import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.course.fields.id'),
  },
  {
    name: 'owner',
    label: i18n('entities.course.fields.owner'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'title',
    label: i18n('entities.course.fields.title'),
  },
  {
    name: 'price',
    label: i18n('entities.course.fields.price'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'lectures',
    label: i18n('entities.course.fields.lectures'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'courseType',
    label: i18n('entities.course.fields.courseType'),
  },
  {
    name: 'exams',
    label: i18n('entities.course.fields.exams'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'examTimeAllowed',
    label: i18n('entities.course.fields.examTimeAllowed'),
  },
  {
    name: 'surveyRequired',
    label: i18n('entities.course.fields.surveyRequired'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'requiresHonorCode',
    label: i18n('entities.course.fields.requiresHonorCode'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'honorCodeText',
    label: i18n('entities.course.fields.honorCodeText'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.course.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.course.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
