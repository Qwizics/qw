import listActions from 'src/modules/coursePayment/list/coursePaymentListActions';
import CoursePaymentService from 'src/modules/coursePayment/coursePaymentService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'COURSEPAYMENT_DESTROY';

const coursePaymentDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: coursePaymentDestroyActions.DESTROY_STARTED,
      });

      await CoursePaymentService.destroyAll([id]);

      dispatch({
        type: coursePaymentDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.coursePayment.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/course-payment');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: coursePaymentDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: coursePaymentDestroyActions.DESTROY_ALL_STARTED,
      });

      await CoursePaymentService.destroyAll(ids);

      dispatch({
        type: coursePaymentDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.coursePayment.destroyAll.success'),
      );

      getHistory().push('/course-payment');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: coursePaymentDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default coursePaymentDestroyActions;
