import list from 'src/modules/answerResult/list/answerResultListReducers';
import form from 'src/modules/answerResult/form/answerResultFormReducers';
import view from 'src/modules/answerResult/view/answerResultViewReducers';
import destroy from 'src/modules/answerResult/destroy/answerResultDestroyReducers';
import importerReducer from 'src/modules/answerResult/importer/answerResultImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
