import AnswerResultService from 'src/modules/answerResult/answerResultService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ANSWERRESULT_FORM';

const answerResultFormActions = {
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
        type: answerResultFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await AnswerResultService.find(id);
      }

      dispatch({
        type: answerResultFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: answerResultFormActions.INIT_ERROR,
      });

      getHistory().push('/answer-result');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: answerResultFormActions.CREATE_STARTED,
      });

      await AnswerResultService.create(values);

      dispatch({
        type: answerResultFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.answerResult.create.success'),
      );

      getHistory().push('/answer-result');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: answerResultFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: answerResultFormActions.UPDATE_STARTED,
      });

      await AnswerResultService.update(id, values);

      dispatch({
        type: answerResultFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.answerResult.update.success'),
      );

      getHistory().push('/answer-result');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: answerResultFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default answerResultFormActions;
