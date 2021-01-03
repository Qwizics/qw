import ExamService from 'src/modules/exam/examService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'EXAM_VIEW';

const examViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: examViewActions.FIND_STARTED,
      });

      const record = await ExamService.find(id);

      dispatch({
        type: examViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: examViewActions.FIND_ERROR,
      });

      getHistory().push('/exam');
    }
  },
};

export default examViewActions;
