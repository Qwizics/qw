import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/examQuestion/importer/examQuestionImporterSelectors';
import ExamQuestionService from 'src/modules/examQuestion/examQuestionService';
import fields from 'src/modules/examQuestion/importer/examQuestionImporterFields';
import { i18n } from 'src/i18n';

const examQuestionImporterActions = importerActions(
  'EXAMQUESTION_IMPORTER',
  selectors,
  ExamQuestionService.import,
  fields,
  i18n('entities.examQuestion.importer.fileName'),
);

export default examQuestionImporterActions;