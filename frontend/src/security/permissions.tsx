import Roles from 'src/security/roles';
import Plans from 'src/security/plans';
import Storage from 'src/security/storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

class Permissions {
  static get values() {
    return {
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.root],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.root],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planEdit: {
        id: 'planEdit',
        allowedRoles: [roles.root],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.root],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.admin],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.root],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.root],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },
      courseImport: {
        id: 'courseImport',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      courseCreate: {
        id: 'courseCreate',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      courseEdit: {
        id: 'courseEdit',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      courseDestroy: {
        id: 'courseDestroy',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      courseRead: {
        id: 'courseRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      courseAutocomplete: {
        id: 'courseAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      courseRegistrationImport: {
        id: 'courseRegistrationImport',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      courseRegistrationCreate: {
        id: 'courseRegistrationCreate',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      courseRegistrationEdit: {
        id: 'courseRegistrationEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      courseRegistrationDestroy: {
        id: 'courseRegistrationDestroy',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      courseRegistrationRead: {
        id: 'courseRegistrationRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      courseRegistrationAutocomplete: {
        id: 'courseRegistrationAutocomplete',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      examImport: {
        id: 'examImport',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      examCreate: {
        id: 'examCreate',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      examEdit: {
        id: 'examEdit',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      examDestroy: {
        id: 'examDestroy',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      examRead: {
        id: 'examRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      examAutocomplete: {
        id: 'examAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      courseLectureImport: {
        id: 'courseLectureImport',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      courseLectureCreate: {
        id: 'courseLectureCreate',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      courseLectureEdit: {
        id: 'courseLectureEdit',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      courseLectureDestroy: {
        id: 'courseLectureDestroy',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      courseLectureRead: {
        id: 'courseLectureRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      courseLectureAutocomplete: {
        id: 'courseLectureAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      coursePaymentImport: {
        id: 'coursePaymentImport',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      coursePaymentCreate: {
        id: 'coursePaymentCreate',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      coursePaymentEdit: {
        id: 'coursePaymentEdit',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      coursePaymentDestroy: {
        id: 'coursePaymentDestroy',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      coursePaymentRead: {
        id: 'coursePaymentRead',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      coursePaymentAutocomplete: {
        id: 'coursePaymentAutocomplete',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      examQuestionImport: {
        id: 'examQuestionImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      examQuestionCreate: {
        id: 'examQuestionCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      examQuestionEdit: {
        id: 'examQuestionEdit',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      examQuestionDestroy: {
        id: 'examQuestionDestroy',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      examQuestionRead: {
        id: 'examQuestionRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      examQuestionAutocomplete: {
        id: 'examQuestionAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      examAnswerImport: {
        id: 'examAnswerImport',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      examAnswerCreate: {
        id: 'examAnswerCreate',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      examAnswerEdit: {
        id: 'examAnswerEdit',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      examAnswerDestroy: {
        id: 'examAnswerDestroy',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      examAnswerRead: {
        id: 'examAnswerRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      examAnswerAutocomplete: {
        id: 'examAnswerAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      examResultImport: {
        id: 'examResultImport',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      examResultCreate: {
        id: 'examResultCreate',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      examResultEdit: {
        id: 'examResultEdit',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      examResultDestroy: {
        id: 'examResultDestroy',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      examResultRead: {
        id: 'examResultRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      examResultAutocomplete: {
        id: 'examResultAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      answerResultImport: {
        id: 'answerResultImport',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      answerResultCreate: {
        id: 'answerResultCreate',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      answerResultEdit: {
        id: 'answerResultEdit',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      answerResultDestroy: {
        id: 'answerResultDestroy',
        allowedRoles: [roles.root],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      answerResultRead: {
        id: 'answerResultRead',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      answerResultAutocomplete: {
        id: 'answerResultAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
