import CourseLectureService from 'src/modules/courseLecture/courseLectureService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'COURSELECTURE_FORM';

const courseLectureFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: courseLectureFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CourseLectureService.find(id);
      }

      dispatch({
        type: courseLectureFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseLectureFormActions.INIT_ERROR,
      });

      getHistory().push('/course-lecture');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: courseLectureFormActions.CREATE_STARTED,
      });

      await CourseLectureService.create(values);

      dispatch({
        type: courseLectureFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.courseLecture.create.success'),
      );

      getHistory().push('/course-lecture');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseLectureFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: courseLectureFormActions.UPDATE_STARTED,
      });

      await CourseLectureService.update(id, values);

      dispatch({
        type: courseLectureFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.courseLecture.update.success'),
      );

      getHistory().push('/course-lecture');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseLectureFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default courseLectureFormActions;
