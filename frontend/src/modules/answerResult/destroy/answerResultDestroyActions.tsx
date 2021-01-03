import listActions from 'src/modules/answerResult/list/answerResultListActions';
import AnswerResultService from 'src/modules/answerResult/answerResultService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ANSWERRESULT_DESTROY';

const answerResultDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: answerResultDestroyActions.DESTROY_STARTED,
      });

      await AnswerResultService.destroyAll([id]);

      dispatch({
        type: answerResultDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.answerResult.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/answer-result');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: answerResultDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: answerResultDestroyActions.DESTROY_ALL_STARTED,
      });

      await AnswerResultService.destroyAll(ids);

      dispatch({
        type: answerResultDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.answerResult.destroyAll.success'),
      );

      getHistory().push('/answer-result');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: answerResultDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default answerResultDestroyActions;
