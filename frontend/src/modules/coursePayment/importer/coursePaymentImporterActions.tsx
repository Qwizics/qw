import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/coursePayment/importer/coursePaymentImporterSelectors';
import CoursePaymentService from 'src/modules/coursePayment/coursePaymentService';
import fields from 'src/modules/coursePayment/importer/coursePaymentImporterFields';
import { i18n } from 'src/i18n';

const coursePaymentImporterActions = importerActions(
  'COURSEPAYMENT_IMPORTER',
  selectors,
  CoursePaymentService.import,
  fields,
  i18n('entities.coursePayment.importer.fileName'),
);

export default coursePaymentImporterActions;