import listActions from 'src/modules/exam/list/examListActions';
import ExamService from 'src/modules/exam/examService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'EXAM_DESTROY';

const examDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: examDestroyActions.DESTROY_STARTED,
      });

      await ExamService.destroyAll([id]);

      dispatch({
        type: examDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.exam.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/exam');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: examDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: examDestroyActions.DESTROY_ALL_STARTED,
      });

      await ExamService.destroyAll(ids);

      dispatch({
        type: examDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.exam.destroyAll.success'),
      );

      getHistory().push('/exam');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: examDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default examDestroyActions;
