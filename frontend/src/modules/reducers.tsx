import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import course from 'src/modules/course/courseReducers';
import courseRegistration from 'src/modules/courseRegistration/courseRegistrationReducers';
import exam from 'src/modules/exam/examReducers';
import courseLecture from 'src/modules/courseLecture/courseLectureReducers';
import coursePayment from 'src/modules/coursePayment/coursePaymentReducers';
import examQuestion from 'src/modules/examQuestion/examQuestionReducers';
import examAnswer from 'src/modules/examAnswer/examAnswerReducers';
import examResult from 'src/modules/examResult/examResultReducers';
import answerResult from 'src/modules/answerResult/answerResultReducers';
import courseResults from 'src/modules/courseResults/courseResultsReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    course,
    courseRegistration,
    exam,
    courseLecture,
    coursePayment,
    examQuestion,
    examAnswer,
    examResult,
    answerResult,
    courseResults,
  });
