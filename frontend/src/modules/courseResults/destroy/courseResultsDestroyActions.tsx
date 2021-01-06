import listActions from 'src/modules/courseResults/list/courseResultsListActions';
import CourseResultsService from 'src/modules/courseResults/courseResultsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'COURSERESULTS_DESTROY';

const courseResultsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: courseResultsDestroyActions.DESTROY_STARTED,
      });

      await CourseResultsService.destroyAll([id]);

      dispatch({
        type: courseResultsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.courseResults.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/course-results');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: courseResultsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: courseResultsDestroyActions.DESTROY_ALL_STARTED,
      });

      await CourseResultsService.destroyAll(ids);

      dispatch({
        type: courseResultsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.courseResults.destroyAll.success'),
      );

      getHistory().push('/course-results');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: courseResultsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default courseResultsDestroyActions;
