import CoursePaymentService from 'src/modules/coursePayment/coursePaymentService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'COURSEPAYMENT_VIEW';

const coursePaymentViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: coursePaymentViewActions.FIND_STARTED,
      });

      const record = await CoursePaymentService.find(id);

      dispatch({
        type: coursePaymentViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: coursePaymentViewActions.FIND_ERROR,
      });

      getHistory().push('/course-payment');
    }
  },
};

export default coursePaymentViewActions;
