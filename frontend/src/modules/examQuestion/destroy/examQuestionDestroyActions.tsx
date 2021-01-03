import listActions from 'src/modules/examQuestion/list/examQuestionListActions';
import ExamQuestionService from 'src/modules/examQuestion/examQuestionService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'EXAMQUESTION_DESTROY';

const examQuestionDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: examQuestionDestroyActions.DESTROY_STARTED,
      });

      await ExamQuestionService.destroyAll([id]);

      dispatch({
        type: examQuestionDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.examQuestion.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/exam-question');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: examQuestionDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: examQuestionDestroyActions.DESTROY_ALL_STARTED,
      });

      await ExamQuestionService.destroyAll(ids);

      dispatch({
        type: examQuestionDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.examQuestion.destroyAll.success'),
      );

      getHistory().push('/exam-question');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: examQuestionDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default examQuestionDestroyActions;
