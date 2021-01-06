import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.courseResults.fields.id'),
  },
  {
    name: 'lectures',
    label: i18n('entities.courseResults.fields.lectures'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'examResults',
    label: i18n('entities.courseResults.fields.examResults'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'finalScore',
    label: i18n('entities.courseResults.fields.finalScore'),
  },
  {
    name: 'examTimeRemaining',
    label: i18n('entities.courseResults.fields.examTimeRemaining'),
  },
  {
    name: 'courseStatus',
    label: i18n('entities.courseResults.fields.courseStatus'),
  },
  {
    name: 'requiresSurvey',
    label: i18n('entities.courseResults.fields.requiresSurvey'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'surveyResults',
    label: i18n('entities.courseResults.fields.surveyResults'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.courseResults.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.courseResults.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
