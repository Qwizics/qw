import list from 'src/modules/examAnswer/list/examAnswerListReducers';
import form from 'src/modules/examAnswer/form/examAnswerFormReducers';
import view from 'src/modules/examAnswer/view/examAnswerViewReducers';
import destroy from 'src/modules/examAnswer/destroy/examAnswerDestroyReducers';
import importerReducer from 'src/modules/examAnswer/importer/examAnswerImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
