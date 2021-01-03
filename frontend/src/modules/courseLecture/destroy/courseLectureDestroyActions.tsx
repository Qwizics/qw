import listActions from 'src/modules/courseLecture/list/courseLectureListActions';
import CourseLectureService from 'src/modules/courseLecture/courseLectureService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'COURSELECTURE_DESTROY';

const courseLectureDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: courseLectureDestroyActions.DESTROY_STARTED,
      });

      await CourseLectureService.destroyAll([id]);

      dispatch({
        type: courseLectureDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.courseLecture.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/course-lecture');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: courseLectureDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: courseLectureDestroyActions.DESTROY_ALL_STARTED,
      });

      await CourseLectureService.destroyAll(ids);

      dispatch({
        type: courseLectureDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.courseLecture.destroyAll.success'),
      );

      getHistory().push('/course-lecture');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: courseLectureDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default courseLectureDestroyActions;
