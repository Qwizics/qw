const en = {
    courseContent: {
        menu: 'Course Content',
    },
    common: {
        or: 'or',
        cancel: 'Cancel',
        reset: 'Reset',
        save: 'Save',
        search: 'Search',
        edit: 'Edit',
        new: 'New',
        export: 'Export to Excel',
        noDataToExport: 'No data to export',
        import: 'Import',
        discard: 'Discard',
        yes: 'Yes',
        no: 'No',
        pause: 'Pause',
        areYouSure: 'Are you sure?',
        view: 'View',
        destroy: 'Delete',
        mustSelectARow: 'Must select a row',
        start: 'Start',
        end: 'End',
        select: 'Select',
        continue: 'Continue',
        filters: 'Filters',
    },

    app: {
        title: 'Application',
    },

    entities: {
        course: {
            name: 'course',
            label: 'Courses',
            menu: 'Courses',
            exporterFileName: 'course_export',
            list: {
                menu: 'Courses',
                title: 'Courses',
            },
            create: {
                success: 'Course successfully saved',
            },
            update: {
                success: 'Course successfully saved',
            },
            destroy: {
                success: 'Course successfully deleted',
            },
            destroyAll: {
                success: 'Course(s) successfully deleted',
            },
            edit: {
                title: 'Edit Course',
            },
            fields: {
                id: 'Id',
                'owner': 'Owner',
                'title': 'Title',
                'priceRange': 'Price',
                'price': 'Price',
                'lectures': 'Lectures',
                'courseType': 'CourseType',
                'exams': 'Exams',
                'examTimeAllowedRange': 'ExamTimeAllowed',
                'examTimeAllowed': 'ExamTimeAllowed',
                'surveyRequired': 'SurveyRequired',
                'requiresHonorCode': 'RequiresHonorCode',
                'honorCodeText': 'HonorCodeText',
                createdAt: 'Created at',
                updatedAt: 'Updated at',
                createdAtRange: 'Created at',
            },
            enumerators: {},
            new: {
                title: 'New Course',
            },
            view: {
                title: 'View Course',
            },
            importer: {
                title: 'Import Courses',
                fileName: 'course_import_template',
                hint:
                    'Files/Images columns must be the URLs of the files separated by space.',
            },
        },

    courseRegistration: {
        name: 'courseRegistration',
        label: 'Course Registrations',
        menu: 'Course Registrations',
        exporterFileName: 'courseRegistration_export',
        list: {
          menu: 'Course Registrations',
          title: 'Course Registrations',
        },
        create: {
          success: 'Course Registration successfully saved',
        },
        update: {
          success: 'Course Registration successfully saved',
        },
        destroy: {
          success: 'Course Registration successfully deleted',
        },
        destroyAll: {
          success: 'Course Registration(s) successfully deleted',
        },
        edit: {
          title: 'Edit Course Registration',
        },
        fields: {
          id: 'Id',
          'attendee': 'Attendee',
          'course': 'Course',
          'user': 'User',
          'coursePayment': 'CoursePayment',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Course Registration',
        },
        view: {
          title: 'View Course Registration',
        },
        importer: {
          title: 'Import Course Registrations',
          fileName: 'courseRegistration_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

        exam: {
            name: 'exam',
            label: 'Exams',
            menu: 'Exams',
            exporterFileName: 'exam_export',
            list: {
                menu: 'Exams',
                title: 'Exams',
            },
            create: {
                success: 'Exam successfully saved',
            },
            update: {
                success: 'Exam successfully saved',
            },
            destroy: {
                success: 'Exam successfully deleted',
            },
            destroyAll: {
                success: 'Exam(s) successfully deleted',
            },
            edit: {
                title: 'Edit Exam',
            },
            fields: {
                id: 'Id',
                'title': 'Title',
                'questions': 'Questions',
                'answersRequiredRange': 'AnswersRequired',
                'answersRequired': 'AnswersRequired',
                'passingScoreRange': 'PassingScore',
                'passingScore': 'PassingScore',
                'course': 'Course',
                'lecture': 'Lecture',
                'isRequired': 'IsRequired',
                'examType': 'ExamType',
                createdAt: 'Created at',
                updatedAt: 'Updated at',
                createdAtRange: 'Created at',
            },
            enumerators: {
                'examType': {
                    'SURVEY': 'SURVEY',
                    'EXAM': 'EXAM',
                },
            },
            new: {
                title: 'New Exam',
            },
            view: {
                title: 'View Exam',
            },
            importer: {
                title: 'Import Exams',
                fileName: 'exam_import_template',
                hint:
                    'Files/Images columns must be the URLs of the files separated by space.',
            },
        },

        courseLecture: {
            name: 'courseLecture',
            label: 'Course Lectures',
            menu: 'Course Lectures',
            exporterFileName: 'courseLecture_export',
            list: {
                menu: 'Course Lectures',
                title: 'Course Lectures',
            },
            create: {
                success: 'Course Lecture successfully saved',
            },
            update: {
                success: 'Course Lecture successfully saved',
            },
            destroy: {
                success: 'Course Lecture successfully deleted',
            },
            destroyAll: {
                success: 'Course Lecture(s) successfully deleted',
            },
            edit: {
                title: 'Edit Course Lecture',
            },
            fields: {
                id: 'Id',
                'lectureTitle': 'LectureTitle',
                'lectureType': 'LectureType',
                'lectureUrl': 'LectureUrl',
                createdAt: 'Created at',
                updatedAt: 'Updated at',
                createdAtRange: 'Created at',
            },
            enumerators: {},
            new: {
                title: 'New Course Lecture',
            },
            view: {
                title: 'View Course Lecture',
            },
            importer: {
                title: 'Import Course Lectures',
                fileName: 'courseLecture_import_template',
                hint:
                    'Files/Images columns must be the URLs of the files separated by space.',
            },
        },

    coursePayment: {
        name: 'coursePayment',
        label: 'Course Payments',
        menu: 'Course Payments',
        exporterFileName: 'coursePayment_export',
        list: {
          menu: 'Course Payments',
          title: 'Course Payments',
        },
        create: {
          success: 'Course Payment successfully saved',
        },
        update: {
          success: 'Course Payment successfully saved',
        },
        destroy: {
          success: 'Course Payment successfully deleted',
        },
        destroyAll: {
          success: 'Course Payment(s) successfully deleted',
        },
        edit: {
          title: 'Edit Course Payment',
        },
        fields: {
          id: 'Id',
          'transaction': 'Transaction',
          'paymentRange': 'Payment',
          'payment': 'Payment',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Course Payment',
        },
        view: {
          title: 'View Course Payment',
        },
        importer: {
          title: 'Import Course Payments',
          fileName: 'coursePayment_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    examQuestion: {
        name: 'examQuestion',
        label: 'Exam Questions',
        menu: 'Exam Questions',
        exporterFileName: 'examQuestion_export',
        list: {
          menu: 'Exam Questions',
          title: 'Exam Questions',
        },
        create: {
          success: 'Exam Question successfully saved',
        },
        update: {
          success: 'Exam Question successfully saved',
        },
        destroy: {
          success: 'Exam Question successfully deleted',
        },
        destroyAll: {
          success: 'Exam Question(s) successfully deleted',
        },
        edit: {
          title: 'Edit Exam Question',
        },
        fields: {
          id: 'Id',
          'textValue': 'TextValue',
          'questionType': 'QuestionType',
          'answers': 'Answers',
          'correctAnswer': 'CorrectAnswer',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'questionType': {
            'MULT_TEXT': 'MULT_TEXT',
            'MULT_1': 'MULT_1',
          },
        },
        new: {
          title: 'New Exam Question',
        },
        view: {
          title: 'View Exam Question',
        },
        importer: {
          title: 'Import Exam Questions',
          fileName: 'examQuestion_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    examAnswer: {
        name: 'examAnswer',
        label: 'Exam Answers',
        menu: 'Exam Answers',
        exporterFileName: 'examAnswer_export',
        list: {
          menu: 'Exam Answers',
          title: 'Exam Answers',
        },
        create: {
          success: 'Exam Answer successfully saved',
        },
        update: {
          success: 'Exam Answer successfully saved',
        },
        destroy: {
          success: 'Exam Answer successfully deleted',
        },
        destroyAll: {
          success: 'Exam Answer(s) successfully deleted',
        },
        edit: {
          title: 'Edit Exam Answer',
        },
        fields: {
          id: 'Id',
          'answerText': 'AnswerText',
          'order': 'Order',
          'answerType': 'AnswerType',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'answerType': {
            'MULT_ONE': 'MULT_ONE',
            'MULT_RATING': 'MULT_RATING',
            'MULT_OR': 'MULT_OR',
            'MULT_AND': 'MULT_AND',
          },
        },
        new: {
          title: 'New Exam Answer',
        },
        view: {
          title: 'View Exam Answer',
        },
        importer: {
          title: 'Import Exam Answers',
          fileName: 'examAnswer_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    examResult: {
        name: 'examResult',
        label: 'Exam Results',
        menu: 'Exam Results',
        exporterFileName: 'examResult_export',
        list: {
          menu: 'Exam Results',
          title: 'Exam Results',
        },
        create: {
          success: 'Exam Result successfully saved',
        },
        update: {
          success: 'Exam Result successfully saved',
        },
        destroy: {
          success: 'Exam Result successfully deleted',
        },
        destroyAll: {
          success: 'Exam Result(s) successfully deleted',
        },
        edit: {
          title: 'Edit Exam Result',
        },
        fields: {
          id: 'Id',
          'questions': 'Questions',
          'status': 'Status',
          'lecture': 'Lecture',
          'course': 'Course',
          'answers': 'Answers',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Exam Result',
        },
        view: {
          title: 'View Exam Result',
        },
        importer: {
          title: 'Import Exam Results',
          fileName: 'examResult_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    answerResult: {
        name: 'answerResult',
        label: 'Answer Results',
        menu: 'Answer Results',
        exporterFileName: 'answerResult_export',
        list: {
          menu: 'Answer Results',
          title: 'Answer Results',
        },
        create: {
          success: 'Answer Result successfully saved',
        },
        update: {
          success: 'Answer Result successfully saved',
        },
        destroy: {
          success: 'Answer Result successfully deleted',
        },
        destroyAll: {
          success: 'Answer Result(s) successfully deleted',
        },
        edit: {
          title: 'Edit Answer Result',
        },
        fields: {
          id: 'Id',
          'answer': 'Answer',
          'question': 'Question',
          'user': 'User',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Answer Result',
        },
        view: {
          title: 'View Answer Result',
        },
        importer: {
          title: 'Import Answer Results',
          fileName: 'answerResult_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    courseResults: {
        name: 'courseResults',
        label: 'CourseResults',
        menu: 'CourseResults',
        exporterFileName: 'courseResults_export',
        list: {
          menu: 'CourseResults',
          title: 'CourseResults',
        },
        create: {
          success: 'CourseResults successfully saved',
        },
        update: {
          success: 'CourseResults successfully saved',
        },
        destroy: {
          success: 'CourseResults successfully deleted',
        },
        destroyAll: {
          success: 'CourseResults(s) successfully deleted',
        },
        edit: {
          title: 'Edit CourseResults',
        },
        fields: {
          id: 'Id',
          'lectures': 'Lectures',
          'examResults': 'ExamResults',
          'finalScoreRange': 'FinalScore',
          'finalScore': 'FinalScore',
          'examTimeRemainingRange': 'ExamTimeRemaining',
          'examTimeRemaining': 'ExamTimeRemaining',
          'courseStatus': 'CourseStatus',
          'requiresSurvey': 'RequiresSurvey',
          'surveyResults': 'SurveyResults',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'courseStatus': {
            'ACTIVE': 'ACTIVE',
            'OPEN': 'OPEN',
            'PASSED': 'PASSED',
            'FAILED': 'FAILED',
          },
        },
        new: {
          title: 'New CourseResults',
        },
        view: {
          title: 'View CourseResults',
        },
        importer: {
          title: 'Import CourseResults',
          fileName: 'courseResults_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

    auth: {
        tenants: 'Workspaces',
        profile: {
            title: 'Profile',
            success: 'Profile successfully updated',
        },
        createAnAccount: 'Create an account',
        rememberMe: 'Remember me',
        forgotPassword: 'Forgot password',
        signin: 'Sign in',
        signup: 'Sign up',
        signout: 'Sign out',
        alreadyHaveAnAccount:
            'Already have an account? Sign in.',
        signinWithAnotherAccount:
            'Sign in with another account',
        emailUnverified: {
            message: `Please confirm your email at <strong>{0}</strong> to continue.`,
            submit: `Resend email verification`,
        },
        emptyPermissions: {
            message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
        },
        passwordResetEmail: {
            message: 'Send password reset email',
            error: `Email not recognized`,
        },
        passwordReset: {
            message: 'Reset password',
        },
        passwordChange: {
            title: 'Change Password',
            success: 'Password successfully changed',
            mustMatch: 'Passwords must match',
        },
        emailAddressVerificationEmail: {
            error: `Email not recognized`,
        },
        verificationEmailSuccess: `Verification email successfully sent`,
        passwordResetEmailSuccess: `Password reset email successfully sent`,
        passwordResetSuccess: `Password successfully changed`,
        verifyEmail: {
            success: 'Email successfully verified.',
            message:
                'Just a moment, your email is being verified...',
        },
    },

    roles: {
        admin: {
            label: 'Admin',
            description: 'Full access to all resources',
        },
        custom: {
            label: 'Custom Role',
            description: 'Custom role access',
        },
        root: {
            label: 'Root Role',
            description: 'Custom role access',
        },
        user: {
            label: 'User Role',
            description: 'User role access',
        },
    },

    user: {
        fields: {
            id: 'Id',
            avatars: 'Avatar',
            email: 'Email',
            emails: 'Email(s)',
            fullName: 'Name',
            firstName: 'First Name',
            lastName: 'Last Name',
            status: 'Status',
            phoneNumber: 'Phone Number',
            role: 'Role',
            createdAt: 'Created at',
            updatedAt: 'Updated at',
            roleUser: 'Role/User',
            roles: 'Roles',
            createdAtRange: 'Created at',
            password: 'Password',
            oldPassword: 'Old Password',
            newPassword: 'New Password',
            newPasswordConfirmation: 'New Password Confirmation',
            rememberMe: 'Remember me',
        },
        status: {
            active: 'Active',
            invited: 'Invited',
            'empty-permissions': 'Waiting for Permissions',
        },
        invite: 'Invite',
        validations: {
            // eslint-disable-next-line
            email: 'Email ${value} is invalid',
        },
        title: 'Users',
        menu: 'Users',
        doAddSuccess: 'User(s) successfully saved',
        doUpdateSuccess: 'User successfully saved',
        exporterFileName: 'users_export',
        doDestroySuccess: 'User successfully deleted',
        doDestroyAllSelectedSuccess:
            'Users successfully deleted',
        edit: {
            title: 'Edit User',
        },
        new: {
            title: 'Invite User(s)',
            titleModal: 'Invite User',
            emailsHint:
                'Separate multiple email addresses using the comma character.',
        },
        view: {
            title: 'View User',
            activity: 'Activity',
        },
        importer: {
            title: 'Import Users',
            fileName: 'users_import_template',
            hint:
                'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
        },
        errors: {
            userAlreadyExists:
                'User with this email already exists',
            userNotFound: 'User not found',
            revokingOwnPermission: `You can't revoke your own admin permission`,
        },
    },

    tenant: {
        name: 'tenant',
        label: 'Workspaces',
        menu: 'Workspaces',
        list: {
            menu: 'Workspaces',
            title: 'Workspaces',
        },
        create: {
            button: 'Create Workspace',
            success: 'Workspace successfully saved',
        },
        update: {
            success: 'Workspace successfully saved',
        },
        destroy: {
            success: 'Workspace successfully deleted',
        },
        destroyAll: {
            success: 'Workspace(s) successfully deleted',
        },
        edit: {
            title: 'Edit Workspace',
        },
        fields: {
            id: 'Id',
            name: 'Name',
            url: 'URL',
            tenantName: 'Workspace Name',
            tenantId: 'Workspace',
            tenantUrl: 'Workspace URL',
            plan: 'Plan',
        },
        enumerators: {},
        new: {
            title: 'New Workspace',
        },
        invitation: {
            view: 'View Invitations',
            invited: 'Invited',
            accept: 'Accept Invitation',
            decline: 'Decline Invitation',
            declined: 'Invitation successfully declined',
            acceptWrongEmail: 'Accept Invitation With This Email',
        },
        select: 'Select Workspace',
        validation: {
            url:
                'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
        },
    },

    plan: {
        menu: 'Plans',
        title: 'Plans',

        free: {
            label: 'Free',
            price: '$0',
        },
        growth: {
            label: 'Growth',
            price: '$10',
        },
        enterprise: {
            label: 'Enterprise',
            price: '$50',
        },

        pricingPeriod: '/month',
        current: 'Current Plan',
        subscribe: 'Subscribe',
        manage: 'Manage Subscription',
        cancelAtPeriodEnd:
            'This plan will be canceled at the end of the period.',
        somethingWrong:
            'There is something wrong with your subscription. Please go to manage subscription for more details.',
        notPlanUser: `You are not the manager of this subscription.`,
    },

    auditLog: {
        menu: 'Audit Logs',
        title: 'Audit Logs',
        exporterFileName: 'audit_log_export',
        entityNamesHint:
            'Separate multiple entities using the comma character.',
        fields: {
            id: 'Id',
            timestampRange: 'Period',
            entityName: 'Entity',
            entityNames: 'Entities',
            entityId: 'Entity ID',
            action: 'Action',
            values: 'Values',
            timestamp: 'Date',
            createdByEmail: 'User Email',
        },
    },
    settings: {
        title: 'Settings',
        menu: 'Settings',
        save: {
            success:
                'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
        },
        fields: {
            primary: 'Primary Color',
            secondary: 'Secondary Color',
            logos: 'Logo',
            backgroundImages: 'Background Images',
            shade: 'Shade',
        },
    },
    dashboard: {
        menu: 'Dashboard',
        message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
        charts: {
            day: 'Day',
            red: 'Red',
            green: 'Green',
            yellow: 'Yellow',
            grey: 'Grey',
            blue: 'Blue',
            orange: 'Orange',
            months: {
                1: 'January',
                2: 'February',
                3: 'March',
                4: 'April',
                5: 'May',
                6: 'June',
                7: 'July',
            },
            eating: 'Eating',
            drinking: 'Drinking',
            sleeping: 'Sleeping',
            designing: 'Designing',
            coding: 'Coding',
            cycling: 'Cycling',
            running: 'Running',
            customer: 'Customer',
        },
    },
    errors: {
        backToHome: 'Back to home',
        403: `Sorry, you don't have access to this page`,
        404: 'Sorry, the page you visited does not exist',
        500: 'Sorry, the server is reporting an error',
        429: 'Too many requests. Please try again later.',
        forbidden: {
            message: 'Forbidden',
        },
        validation: {
            message: 'An error occurred',
        },
        defaultErrorMessage: 'Ops, an error occurred',
    },
    // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
    /* eslint-disable */
    validation: {
        mixed: {
            default: '${path} is invalid',
            required: '${path} is required',
            oneOf:
                '${path} must be one of the following values: ${values}',
            notOneOf:
                '${path} must not be one of the following values: ${values}',
            notType: ({path, type, value, originalValue}) => {
                return `${path} must be a ${type}`;
            },
        },
        string: {
            length:
                '${path} must be exactly ${length} characters',
            min: '${path} must be at least ${min} characters',
            max: '${path} must be at most ${max} characters',
            matches:
                '${path} must match the following: "${regex}"',
            email: '${path} must be a valid email',
            url: '${path} must be a valid URL',
            trim: '${path} must be a trimmed string',
            lowercase: '${path} must be a lowercase string',
            uppercase: '${path} must be a upper case string',
            selected: '${path} must be selected',
        },
        number: {
            min:
                '${path} must be greater than or equal to ${min}',
            max: '${path} must be less than or equal to ${max}',
            lessThan: '${path} must be less than ${less}',
            moreThan: '${path} must be greater than ${more}',
            notEqual: '${path} must be not equal to ${notEqual}',
            positive: '${path} must be a positive number',
            negative: '${path} must be a negative number',
            integer: '${path} must be an integer',
        },
        date: {
            min: '${path} field must be later than ${min}',
            max: '${path} field must be at earlier than ${max}',
        },
        boolean: {},
        object: {
            noUnknown:
                '${path} field cannot have keys not specified in the object shape',
        },
        array: {
            min: '${path} field must have at least ${min} items',
            max:
                '${path} field must have less than or equal to ${max} items',
        },
    },
    /* eslint-disable */
    fileUploader: {
        upload: 'Upload',
        image: 'You must upload an image',
        size: 'File is too big. Max allowed size is {0}',
        formats: `Invalid format. Must be one of: {0}.`,
    },
    importer: {
        line: 'Line',
        status: 'Status',
        pending: 'Pending',
        imported: 'Imported',
        error: 'Error',
        total: `{0} imported, {1} pending and {2} with error`,
        importedMessage: `Processed {0} of {1}.`,
        noNavigateAwayMessage:
            'Do not navigate away from this page or import will be stopped.',
        completed: {
            success:
                'Import completed. All rows were successfully imported.',
            someErrors:
                'Processing completed, but some rows were unable to be imported.',
            allErrors: 'Import failed. There are no valid rows.',
        },
        form: {
            downloadTemplate: 'Download the template',
            hint:
                'Click or drag the file to this area to continue',
        },
        list: {
            discardConfirm:
                'Are you sure? Non-imported data will be lost.',
        },
        errors: {
            invalidFileEmpty: 'The file is empty',
            invalidFileExcel:
                'Only excel (.xlsx) files are allowed',
            invalidFileUpload:
                'Invalid file. Make sure you are using the last version of the template.',
            importHashRequired: 'Import hash is required',
            importHashExistent: 'Data has already been imported',
        },
    },

    autocomplete: {
        loading: 'Loading...',
        noOptions: 'No data found',
    },

    imagesViewer: {
        noImage: 'No image',
    },

    table: {
        noData: 'No records found',
        loading: 'Loading...',
    },

    pagination: {
        labelDisplayedRows: '{0}-{1} of {2}',
        labelRowsPerPage: 'Per page:',
    },
};

export default en;
