import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/courseRegistration/importer/courseRegistrationImporterSelectors';
import CourseRegistrationService from 'src/modules/courseRegistration/courseRegistrationService';
import fields from 'src/modules/courseRegistration/importer/courseRegistrationImporterFields';
import { i18n } from 'src/i18n';

const courseRegistrationImporterActions = importerActions(
  'COURSEREGISTRATION_IMPORTER',
  selectors,
  CourseRegistrationService.import,
  fields,
  i18n('entities.courseRegistration.importer.fileName'),
);

export default courseRegistrationImporterActions;