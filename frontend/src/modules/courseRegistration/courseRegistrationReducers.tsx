import list from 'src/modules/courseRegistration/list/courseRegistrationListReducers';
import form from 'src/modules/courseRegistration/form/courseRegistrationFormReducers';
import view from 'src/modules/courseRegistration/view/courseRegistrationViewReducers';
import destroy from 'src/modules/courseRegistration/destroy/courseRegistrationDestroyReducers';
import importerReducer from 'src/modules/courseRegistration/importer/courseRegistrationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
