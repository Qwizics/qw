import listActions from 'src/modules/examAnswer/list/examAnswerListActions';
import ExamAnswerService from 'src/modules/examAnswer/examAnswerService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'EXAMANSWER_DESTROY';

const examAnswerDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: examAnswerDestroyActions.DESTROY_STARTED,
      });

      await ExamAnswerService.destroyAll([id]);

      dispatch({
        type: examAnswerDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.examAnswer.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/exam-answer');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: examAnswerDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: examAnswerDestroyActions.DESTROY_ALL_STARTED,
      });

      await ExamAnswerService.destroyAll(ids);

      dispatch({
        type: examAnswerDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.examAnswer.destroyAll.success'),
      );

      getHistory().push('/exam-answer');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: examAnswerDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default examAnswerDestroyActions;
