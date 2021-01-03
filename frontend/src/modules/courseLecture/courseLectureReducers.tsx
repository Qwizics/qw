import list from 'src/modules/courseLecture/list/courseLectureListReducers';
import form from 'src/modules/courseLecture/form/courseLectureFormReducers';
import view from 'src/modules/courseLecture/view/courseLectureViewReducers';
import destroy from 'src/modules/courseLecture/destroy/courseLectureDestroyReducers';
import importerReducer from 'src/modules/courseLecture/importer/courseLectureImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
