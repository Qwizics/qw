import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import React from 'react';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import config from 'src/config';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: <DashboardIcon />,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: <CreditCardOutlinedIcon />,
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: <PersonIcon />,
  },

  {
    path: '/audit-logs',
    icon: <HistoryIcon />,
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: <SettingsIcon />,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/course',
    permissionRequired: permissions.courseRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.course.menu'),
  },

  {
    path: '/course-registration',
    permissionRequired: permissions.courseRegistrationRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.courseRegistration.menu'),
  },

  {
    path: '/exam',
    permissionRequired: permissions.examRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.exam.menu'),
  },

  {
    path: '/course-lecture',
    permissionRequired: permissions.courseLectureRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.courseLecture.menu'),
  },

  {
    path: '/course-payment',
    permissionRequired: permissions.coursePaymentRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.coursePayment.menu'),
  },

  {
    path: '/exam-question',
    permissionRequired: permissions.examQuestionRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.examQuestion.menu'),
  },

  {
    path: '/exam-answer',
    permissionRequired: permissions.examAnswerRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.examAnswer.menu'),
  },

  {
    path: '/exam-result',
    permissionRequired: permissions.examResultRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.examResult.menu'),
  },

  {
    path: '/answer-result',
    permissionRequired: permissions.answerResultRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.answerResult.menu'),
  },
  {
    path: '/course-results',
    permissionRequired: permissions.courseResultsRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.courseResults.menu'),
  },

  {
    path: '/course-content',
    permissionRequired: permissions.courseContent,
    icon: <ChevronRightIcon />,
    label: i18n('courseContent.menu'),
  },
].filter(Boolean);
