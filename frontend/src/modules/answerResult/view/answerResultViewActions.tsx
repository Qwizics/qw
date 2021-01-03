import AnswerResultService from 'src/modules/answerResult/answerResultService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ANSWERRESULT_VIEW';

const answerResultViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: answerResultViewActions.FIND_STARTED,
      });

      const record = await AnswerResultService.find(id);

      dispatch({
        type: answerResultViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: answerResultViewActions.FIND_ERROR,
      });

      getHistory().push('/answer-result');
    }
  },
};

export default answerResultViewActions;
