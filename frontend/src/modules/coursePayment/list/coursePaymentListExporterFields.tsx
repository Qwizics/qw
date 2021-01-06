import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.coursePayment.fields.id'),
  },
  {
    name: 'transaction',
    label: i18n('entities.coursePayment.fields.transaction'),
  },
  {
    name: 'payment',
    label: i18n('entities.coursePayment.fields.payment'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.coursePayment.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.coursePayment.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
