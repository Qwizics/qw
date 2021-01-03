import ExamQuestionService from 'src/modules/examQuestion/examQuestionService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'EXAMQUESTION_FORM';

const examQuestionFormActions = {
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
        type: examQuestionFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ExamQuestionService.find(id);
      }

      dispatch({
        type: examQuestionFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: examQuestionFormActions.INIT_ERROR,
      });

      getHistory().push('/exam-question');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: examQuestionFormActions.CREATE_STARTED,
      });

      await ExamQuestionService.create(values);

      dispatch({
        type: examQuestionFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.examQuestion.create.success'),
      );

      getHistory().push('/exam-question');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: examQuestionFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: examQuestionFormActions.UPDATE_STARTED,
      });

      await ExamQuestionService.update(id, values);

      dispatch({
        type: examQuestionFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.examQuestion.update.success'),
      );

      getHistory().push('/exam-question');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: examQuestionFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default examQuestionFormActions;
