import CourseRegistrationService from 'src/modules/courseRegistration/courseRegistrationService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'COURSEREGISTRATION_VIEW';

const courseRegistrationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: courseRegistrationViewActions.FIND_STARTED,
      });

      const record = await CourseRegistrationService.find(id);

      dispatch({
        type: courseRegistrationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: courseRegistrationViewActions.FIND_ERROR,
      });

      getHistory().push('/course-registration');
    }
  },
};

export default courseRegistrationViewActions;
