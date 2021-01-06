import list from 'src/modules/courseResults/list/courseResultsListReducers';
import form from 'src/modules/courseResults/form/courseResultsFormReducers';
import view from 'src/modules/courseResults/view/courseResultsViewReducers';
import destroy from 'src/modules/courseResults/destroy/courseResultsDestroyReducers';
import importerReducer from 'src/modules/courseResults/importer/courseResultsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
