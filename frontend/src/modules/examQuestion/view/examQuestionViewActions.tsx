import ExamQuestionService from 'src/modules/examQuestion/examQuestionService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'EXAMQUESTION_VIEW';

const examQuestionViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: examQuestionViewActions.FIND_STARTED,
      });

      const record = await ExamQuestionService.find(id);

      dispatch({
        type: examQuestionViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: examQuestionViewActions.FIND_ERROR,
      });

      getHistory().push('/exam-question');
    }
  },
};

export default examQuestionViewActions;
