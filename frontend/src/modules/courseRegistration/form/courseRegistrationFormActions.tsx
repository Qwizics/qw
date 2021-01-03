import CourseRegistrationService from 'src/modules/courseRegistration/courseRegistrationService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'COURSEREGISTRATION_FORM';

const courseRegistrationFormActions = {
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
        type: courseRegistrationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CourseRegistrationService.find(id);
      }

      dispatch({
        type: courseRegistrationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseRegistrationFormActions.INIT_ERROR,
      });

      getHistory().push('/course-registration');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: courseRegistrationFormActions.CREATE_STARTED,
      });

      await CourseRegistrationService.create(values);

      dispatch({
        type: courseRegistrationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.courseRegistration.create.success'),
      );

      getHistory().push('/course-registration');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseRegistrationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: courseRegistrationFormActions.UPDATE_STARTED,
      });

      await CourseRegistrationService.update(id, values);

      dispatch({
        type: courseRegistrationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.courseRegistration.update.success'),
      );

      getHistory().push('/course-registration');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseRegistrationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default courseRegistrationFormActions;
