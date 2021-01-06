import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/courseResults/importer/courseResultsImporterSelectors';
import CourseResultsService from 'src/modules/courseResults/courseResultsService';
import fields from 'src/modules/courseResults/importer/courseResultsImporterFields';
import { i18n } from 'src/i18n';

const courseResultsImporterActions = importerActions(
  'COURSERESULTS_IMPORTER',
  selectors,
  CourseResultsService.import,
  fields,
  i18n('entities.courseResults.importer.fileName'),
);

export default courseResultsImporterActions;