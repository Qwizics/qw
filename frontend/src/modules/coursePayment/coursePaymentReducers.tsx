import list from 'src/modules/coursePayment/list/coursePaymentListReducers';
import form from 'src/modules/coursePayment/form/coursePaymentFormReducers';
import view from 'src/modules/coursePayment/view/coursePaymentViewReducers';
import destroy from 'src/modules/coursePayment/destroy/coursePaymentDestroyReducers';
import importerReducer from 'src/modules/coursePayment/importer/coursePaymentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
