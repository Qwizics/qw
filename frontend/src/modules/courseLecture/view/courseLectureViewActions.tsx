import CourseLectureService from 'src/modules/courseLecture/courseLectureService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'COURSELECTURE_VIEW';

const courseLectureViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: courseLectureViewActions.FIND_STARTED,
      });

      const record = await CourseLectureService.find(id);

      dispatch({
        type: courseLectureViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseLectureViewActions.FIND_ERROR,
      });

      getHistory().push('/course-lecture');
    }
  },
};

export default courseLectureViewActions;
