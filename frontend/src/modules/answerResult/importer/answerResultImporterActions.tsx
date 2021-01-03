import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/answerResult/importer/answerResultImporterSelectors';
import AnswerResultService from 'src/modules/answerResult/answerResultService';
import fields from 'src/modules/answerResult/importer/answerResultImporterFields';
import { i18n } from 'src/i18n';

const answerResultImporterActions = importerActions(
  'ANSWERRESULT_IMPORTER',
  selectors,
  AnswerResultService.import,
  fields,
  i18n('entities.answerResult.importer.fileName'),
);

export default answerResultImporterActions;