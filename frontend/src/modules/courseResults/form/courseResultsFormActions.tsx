import CourseResultsService from 'src/modules/courseResults/courseResultsService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'COURSERESULTS_FORM';

const courseResultsFormActions = {
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
        type: courseResultsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CourseResultsService.find(id);
      }

      dispatch({
        type: courseResultsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseResultsFormActions.INIT_ERROR,
      });

      getHistory().push('/course-results');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: courseResultsFormActions.CREATE_STARTED,
      });

      await CourseResultsService.create(values);

      dispatch({
        type: courseResultsFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.courseResults.create.success'),
      );

      getHistory().push('/course-results');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseResultsFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: courseResultsFormActions.UPDATE_STARTED,
      });

      await CourseResultsService.update(id, values);

      dispatch({
        type: courseResultsFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.courseResults.update.success'),
      );

      getHistory().push('/course-results');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseResultsFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default courseResultsFormActions;
