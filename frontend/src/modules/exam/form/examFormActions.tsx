import ExamService from 'src/modules/exam/examService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'EXAM_FORM';

const examFormActions = {
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
        type: examFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ExamService.find(id);
      }

      dispatch({
        type: examFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: examFormActions.INIT_ERROR,
      });

      getHistory().push('/exam');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: examFormActions.CREATE_STARTED,
      });

      await ExamService.create(values);

      dispatch({
        type: examFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.exam.create.success'),
      );

      getHistory().push('/exam');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: examFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: examFormActions.UPDATE_STARTED,
      });

      await ExamService.update(id, values);

      dispatch({
        type: examFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.exam.update.success'),
      );

      getHistory().push('/exam');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: examFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default examFormActions;
