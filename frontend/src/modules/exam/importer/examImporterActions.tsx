import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/exam/importer/examImporterSelectors';
import ExamService from 'src/modules/exam/examService';
import fields from 'src/modules/exam/importer/examImporterFields';
import { i18n } from 'src/i18n';

const examImporterActions = importerActions(
  'EXAM_IMPORTER',
  selectors,
  ExamService.import,
  fields,
  i18n('entities.exam.importer.fileName'),
);

export default examImporterActions;