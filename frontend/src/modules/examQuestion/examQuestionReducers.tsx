import list from 'src/modules/examQuestion/list/examQuestionListReducers';
import form from 'src/modules/examQuestion/form/examQuestionFormReducers';
import view from 'src/modules/examQuestion/view/examQuestionViewReducers';
import destroy from 'src/modules/examQuestion/destroy/examQuestionDestroyReducers';
import importerReducer from 'src/modules/examQuestion/importer/examQuestionImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
