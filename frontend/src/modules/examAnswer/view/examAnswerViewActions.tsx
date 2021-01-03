import ExamAnswerService from 'src/modules/examAnswer/examAnswerService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'EXAMANSWER_VIEW';

const examAnswerViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: examAnswerViewActions.FIND_STARTED,
      });

      const record = await ExamAnswerService.find(id);

      dispatch({
        type: examAnswerViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: examAnswerViewActions.FIND_ERROR,
      });

      getHistory().push('/exam-answer');
    }
  },
};

export default examAnswerViewActions;
