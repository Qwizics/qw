import list from 'src/modules/exam/list/examListReducers';
import form from 'src/modules/exam/form/examFormReducers';
import view from 'src/modules/exam/view/examViewReducers';
import destroy from 'src/modules/exam/destroy/examDestroyReducers';
import importerReducer from 'src/modules/exam/importer/examImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
