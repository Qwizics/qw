import Permissions from 'src/security/permissions';
import config from 'src/config';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/course-content',
    loader: () =>
            import('src/view/courseContent/view/CourseLecturePage'),
    permissionRequired: permissions.courseContent,
    exact: true,
  },
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },
  
  {
    path: '/course',
    loader: () =>
      import('src/view/course/list/CourseListPage'),
    permissionRequired: permissions.courseRead,
    exact: true,
  },
  {
    path: '/course/new',
    loader: () =>
      import('src/view/course/form/CourseFormPage'),
    permissionRequired: permissions.courseCreate,
    exact: true,
  },
  {
    path: '/course/importer',
    loader: () =>
      import(
        'src/view/course/importer/CourseImporterPage'
      ),
    permissionRequired: permissions.courseImport,
    exact: true,
  },
  {
    path: '/course/:id/edit',
    loader: () =>
      import('src/view/course/form/CourseFormPage'),
    permissionRequired: permissions.courseEdit,
    exact: true,
  },
  {
    path: '/course/:id',
    loader: () =>
      import('src/view/course/view/CourseViewPage'),
    permissionRequired: permissions.courseRead,
    exact: true,
  },

  {
    path: '/course-registration',
    loader: () =>
      import('src/view/courseRegistration/list/CourseRegistrationListPage'),
    permissionRequired: permissions.courseRegistrationRead,
    exact: true,
  },
  {
    path: '/course-registration/new',
    loader: () =>
      import('src/view/courseRegistration/form/CourseRegistrationFormPage'),
    permissionRequired: permissions.courseRegistrationCreate,
    exact: true,
  },
  {
    path: '/course-registration/importer',
    loader: () =>
      import(
        'src/view/courseRegistration/importer/CourseRegistrationImporterPage'
      ),
    permissionRequired: permissions.courseRegistrationImport,
    exact: true,
  },
  {
    path: '/course-registration/:id/edit',
    loader: () =>
      import('src/view/courseRegistration/form/CourseRegistrationFormPage'),
    permissionRequired: permissions.courseRegistrationEdit,
    exact: true,
  },
  {
    path: '/course-registration/:id',
    loader: () =>
      import('src/view/courseRegistration/view/CourseRegistrationViewPage'),
    permissionRequired: permissions.courseRegistrationRead,
    exact: true,
  },

  {
    path: '/exam',
    loader: () =>
      import('src/view/exam/list/ExamListPage'),
    permissionRequired: permissions.examRead,
    exact: true,
  },
  {
    path: '/exam/new',
    loader: () =>
      import('src/view/exam/form/ExamFormPage'),
    permissionRequired: permissions.examCreate,
    exact: true,
  },
  {
    path: '/exam/importer',
    loader: () =>
      import(
        'src/view/exam/importer/ExamImporterPage'
      ),
    permissionRequired: permissions.examImport,
    exact: true,
  },
  {
    path: '/exam/:id/edit',
    loader: () =>
      import('src/view/exam/form/ExamFormPage'),
    permissionRequired: permissions.examEdit,
    exact: true,
  },
  {
    path: '/exam/:id',
    loader: () =>
      import('src/view/exam/view/ExamViewPage'),
    permissionRequired: permissions.examRead,
    exact: true,
  },

  {
    path: '/course-lecture',
    loader: () =>
      import('src/view/courseLecture/list/CourseLectureListPage'),
    permissionRequired: permissions.courseLectureRead,
    exact: true,
  },
  {
    path: '/course-lecture/new',
    loader: () =>
      import('src/view/courseLecture/form/CourseLectureFormPage'),
    permissionRequired: permissions.courseLectureCreate,
    exact: true,
  },
  {
    path: '/course-lecture/importer',
    loader: () =>
      import(
        'src/view/courseLecture/importer/CourseLectureImporterPage'
      ),
    permissionRequired: permissions.courseLectureImport,
    exact: true,
  },
  {
    path: '/course-lecture/:id/edit',
    loader: () =>
      import('src/view/courseLecture/form/CourseLectureFormPage'),
    permissionRequired: permissions.courseLectureEdit,
    exact: true,
  },
  {
    path: '/course-lecture/:id',
    loader: () =>
      import('src/view/courseLecture/view/CourseLectureViewPage'),
    permissionRequired: permissions.courseLectureRead,
    exact: true,
  },

  {
    path: '/course-payment',
    loader: () =>
      import('src/view/coursePayment/list/CoursePaymentListPage'),
    permissionRequired: permissions.coursePaymentRead,
    exact: true,
  },
  {
    path: '/course-payment/new',
    loader: () =>
      import('src/view/coursePayment/form/CoursePaymentFormPage'),
    permissionRequired: permissions.coursePaymentCreate,
    exact: true,
  },
  {
    path: '/course-payment/importer',
    loader: () =>
      import(
        'src/view/coursePayment/importer/CoursePaymentImporterPage'
      ),
    permissionRequired: permissions.coursePaymentImport,
    exact: true,
  },
  {
    path: '/course-payment/:id/edit',
    loader: () =>
      import('src/view/coursePayment/form/CoursePaymentFormPage'),
    permissionRequired: permissions.coursePaymentEdit,
    exact: true,
  },
  {
    path: '/course-payment/:id',
    loader: () =>
      import('src/view/coursePayment/view/CoursePaymentViewPage'),
    permissionRequired: permissions.coursePaymentRead,
    exact: true,
  },

  {
    path: '/exam-question',
    loader: () =>
      import('src/view/examQuestion/list/ExamQuestionListPage'),
    permissionRequired: permissions.examQuestionRead,
    exact: true,
  },
  {
    path: '/exam-question/new',
    loader: () =>
      import('src/view/examQuestion/form/ExamQuestionFormPage'),
    permissionRequired: permissions.examQuestionCreate,
    exact: true,
  },
  {
    path: '/exam-question/importer',
    loader: () =>
      import(
        'src/view/examQuestion/importer/ExamQuestionImporterPage'
      ),
    permissionRequired: permissions.examQuestionImport,
    exact: true,
  },
  {
    path: '/exam-question/:id/edit',
    loader: () =>
      import('src/view/examQuestion/form/ExamQuestionFormPage'),
    permissionRequired: permissions.examQuestionEdit,
    exact: true,
  },
  {
    path: '/exam-question/:id',
    loader: () =>
      import('src/view/examQuestion/view/ExamQuestionViewPage'),
    permissionRequired: permissions.examQuestionRead,
    exact: true,
  },

  {
    path: '/exam-answer',
    loader: () =>
      import('src/view/examAnswer/list/ExamAnswerListPage'),
    permissionRequired: permissions.examAnswerRead,
    exact: true,
  },
  {
    path: '/exam-answer/new',
    loader: () =>
      import('src/view/examAnswer/form/ExamAnswerFormPage'),
    permissionRequired: permissions.examAnswerCreate,
    exact: true,
  },
  {
    path: '/exam-answer/importer',
    loader: () =>
      import(
        'src/view/examAnswer/importer/ExamAnswerImporterPage'
      ),
    permissionRequired: permissions.examAnswerImport,
    exact: true,
  },
  {
    path: '/exam-answer/:id/edit',
    loader: () =>
      import('src/view/examAnswer/form/ExamAnswerFormPage'),
    permissionRequired: permissions.examAnswerEdit,
    exact: true,
  },
  {
    path: '/exam-answer/:id',
    loader: () =>
      import('src/view/examAnswer/view/ExamAnswerViewPage'),
    permissionRequired: permissions.examAnswerRead,
    exact: true,
  },

  {
    path: '/exam-result',
    loader: () =>
      import('src/view/examResult/list/ExamResultListPage'),
    permissionRequired: permissions.examResultRead,
    exact: true,
  },
  {
    path: '/exam-result/new',
    loader: () =>
      import('src/view/examResult/form/ExamResultFormPage'),
    permissionRequired: permissions.examResultCreate,
    exact: true,
  },
  {
    path: '/exam-result/importer',
    loader: () =>
      import(
        'src/view/examResult/importer/ExamResultImporterPage'
      ),
    permissionRequired: permissions.examResultImport,
    exact: true,
  },
  {
    path: '/exam-result/:id/edit',
    loader: () =>
      import('src/view/examResult/form/ExamResultFormPage'),
    permissionRequired: permissions.examResultEdit,
    exact: true,
  },
  {
    path: '/exam-result/:id',
    loader: () =>
      import('src/view/examResult/view/ExamResultViewPage'),
    permissionRequired: permissions.examResultRead,
    exact: true,
  },

  {
    path: '/answer-result',
    loader: () =>
      import('src/view/answerResult/list/AnswerResultListPage'),
    permissionRequired: permissions.answerResultRead,
    exact: true,
  },
  {
    path: '/answer-result/new',
    loader: () =>
      import('src/view/answerResult/form/AnswerResultFormPage'),
    permissionRequired: permissions.answerResultCreate,
    exact: true,
  },
  {
    path: '/answer-result/importer',
    loader: () =>
      import(
        'src/view/answerResult/importer/AnswerResultImporterPage'
      ),
    permissionRequired: permissions.answerResultImport,
    exact: true,
  },
  {
    path: '/answer-result/:id/edit',
    loader: () =>
      import('src/view/answerResult/form/AnswerResultFormPage'),
    permissionRequired: permissions.answerResultEdit,
    exact: true,
  },
  {
    path: '/answer-result/:id',
    loader: () =>
      import('src/view/answerResult/view/AnswerResultViewPage'),
    permissionRequired: permissions.answerResultRead,
    exact: true,
  },

  {
    path: '/course-results',
    loader: () =>
      import('src/view/courseResults/list/CourseResultsListPage'),
    permissionRequired: permissions.courseResultsRead,
    exact: true,
  },
  {
    path: '/course-results/new',
    loader: () =>
      import('src/view/courseResults/form/CourseResultsFormPage'),
    permissionRequired: permissions.courseResultsCreate,
    exact: true,
  },
  {
    path: '/course-results/importer',
    loader: () =>
      import(
        'src/view/courseResults/importer/CourseResultsImporterPage'
      ),
    permissionRequired: permissions.courseResultsImport,
    exact: true,
  },
  {
    path: '/course-results/:id/edit',
    loader: () =>
      import('src/view/courseResults/form/CourseResultsFormPage'),
    permissionRequired: permissions.courseResultsEdit,
    exact: true,
  },
  {
    path: '/course-results/:id',
    loader: () =>
      import('src/view/courseResults/view/CourseResultsViewPage'),
    permissionRequired: permissions.courseResultsRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
