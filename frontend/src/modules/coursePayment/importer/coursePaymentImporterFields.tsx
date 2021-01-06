import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'transaction',
    label: i18n('entities.coursePayment.fields.transaction'),
    schema: schemas.string(
      i18n('entities.coursePayment.fields.transaction'),
      {},
    ),
  },
  {
    name: 'payment',
    label: i18n('entities.coursePayment.fields.payment'),
    schema: schemas.decimal(
      i18n('entities.coursePayment.fields.payment'),
      {},
    ),
  },
];