import CoursePaymentService from 'src/modules/coursePayment/coursePaymentService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'COURSEPAYMENT_FORM';

const coursePaymentFormActions = {
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
        type: coursePaymentFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CoursePaymentService.find(id);
      }

      dispatch({
        type: coursePaymentFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: coursePaymentFormActions.INIT_ERROR,
      });

      getHistory().push('/course-payment');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: coursePaymentFormActions.CREATE_STARTED,
      });

      await CoursePaymentService.create(values);

      dispatch({
        type: coursePaymentFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.coursePayment.create.success'),
      );

      getHistory().push('/course-payment');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: coursePaymentFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: coursePaymentFormActions.UPDATE_STARTED,
      });

      await CoursePaymentService.update(id, values);

      dispatch({
        type: coursePaymentFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.coursePayment.update.success'),
      );

      getHistory().push('/course-payment');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: coursePaymentFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default coursePaymentFormActions;
