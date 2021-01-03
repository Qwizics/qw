import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/examAnswer/importer/examAnswerImporterSelectors';
import ExamAnswerService from 'src/modules/examAnswer/examAnswerService';
import fields from 'src/modules/examAnswer/importer/examAnswerImporterFields';
import { i18n } from 'src/i18n';

const examAnswerImporterActions = importerActions(
  'EXAMANSWER_IMPORTER',
  selectors,
  ExamAnswerService.import,
  fields,
  i18n('entities.examAnswer.importer.fileName'),
);

export default examAnswerImporterActions;