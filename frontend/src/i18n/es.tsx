const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    start: 'Comienzo',
    end: 'Final',
    select: 'Seleccione',
    continue: 'Continúa',
    filters: 'Filtros',
  },
  app: {
    title: 'Aplicación',
  },
  entities: {
    course: {
        name: 'course',
        label: 'Courses',
        menu: 'Courses',
        exporterFileName: 'exportacion_course',
        list: {
          menu: 'Courses',
          title: 'Courses',
        },
        create: {
          success: 'Course guardado con éxito',
        },
        update: {
          success: 'Course guardado con éxito',
        },
        destroy: {
          success: 'Course eliminado con éxito',
        },
        destroyAll: {
          success: 'Course(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Course',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Course',
        },
        view: {
          title: 'Ver Course',
        },
        importer: {
          title: 'Importar Courses',
          fileName: 'course_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    courseRegistration: {
        name: 'courseRegistration',
        label: 'Course Registrations',
        menu: 'Course Registrations',
        exporterFileName: 'exportacion_courseRegistration',
        list: {
          menu: 'Course Registrations',
          title: 'Course Registrations',
        },
        create: {
          success: 'Course Registration guardado con éxito',
        },
        update: {
          success: 'Course Registration guardado con éxito',
        },
        destroy: {
          success: 'Course Registration eliminado con éxito',
        },
        destroyAll: {
          success: 'Course Registration(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Course Registration',
        },
        fields: {
          id: 'Id',
          'attendee': 'Attendee',
          'course': 'Course',
          'user': 'User',
          'coursePayment': 'CoursePayment',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Course Registration',
        },
        view: {
          title: 'Ver Course Registration',
        },
        importer: {
          title: 'Importar Course Registrations',
          fileName: 'courseRegistration_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    exam: {
        name: 'exam',
        label: 'Exams',
        menu: 'Exams',
        exporterFileName: 'exportacion_exam',
        list: {
          menu: 'Exams',
          title: 'Exams',
        },
        create: {
          success: 'Exam guardado con éxito',
        },
        update: {
          success: 'Exam guardado con éxito',
        },
        destroy: {
          success: 'Exam eliminado con éxito',
        },
        destroyAll: {
          success: 'Exam(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Exam',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'examType': {
            'SURVEY': 'SURVEY',
            'EXAM': 'EXAM',
          },
        },
        new: {
          title: 'Nuevo Exam',
        },
        view: {
          title: 'Ver Exam',
        },
        importer: {
          title: 'Importar Exams',
          fileName: 'exam_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    courseLecture: {
        name: 'courseLecture',
        label: 'Course Lectures',
        menu: 'Course Lectures',
        exporterFileName: 'exportacion_courseLecture',
        list: {
          menu: 'Course Lectures',
          title: 'Course Lectures',
        },
        create: {
          success: 'Course Lecture guardado con éxito',
        },
        update: {
          success: 'Course Lecture guardado con éxito',
        },
        destroy: {
          success: 'Course Lecture eliminado con éxito',
        },
        destroyAll: {
          success: 'Course Lecture(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Course Lecture',
        },
        fields: {
          id: 'Id',
          'lectureTitle': 'LectureTitle',
          'lectureType': 'LectureType',
          'lectureUrl': 'LectureUrl',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Course Lecture',
        },
        view: {
          title: 'Ver Course Lecture',
        },
        importer: {
          title: 'Importar Course Lectures',
          fileName: 'courseLecture_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    coursePayment: {
        name: 'coursePayment',
        label: 'Course Payments',
        menu: 'Course Payments',
        exporterFileName: 'exportacion_coursePayment',
        list: {
          menu: 'Course Payments',
          title: 'Course Payments',
        },
        create: {
          success: 'Course Payment guardado con éxito',
        },
        update: {
          success: 'Course Payment guardado con éxito',
        },
        destroy: {
          success: 'Course Payment eliminado con éxito',
        },
        destroyAll: {
          success: 'Course Payment(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Course Payment',
        },
        fields: {
          id: 'Id',
          'transaction': 'Transaction',
          'paymentRange': 'Payment',
          'payment': 'Payment',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Course Payment',
        },
        view: {
          title: 'Ver Course Payment',
        },
        importer: {
          title: 'Importar Course Payments',
          fileName: 'coursePayment_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    examQuestion: {
        name: 'examQuestion',
        label: 'Exam Questions',
        menu: 'Exam Questions',
        exporterFileName: 'exportacion_examQuestion',
        list: {
          menu: 'Exam Questions',
          title: 'Exam Questions',
        },
        create: {
          success: 'Exam Question guardado con éxito',
        },
        update: {
          success: 'Exam Question guardado con éxito',
        },
        destroy: {
          success: 'Exam Question eliminado con éxito',
        },
        destroyAll: {
          success: 'Exam Question(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Exam Question',
        },
        fields: {
          id: 'Id',
          'textValue': 'TextValue',
          'questionType': 'QuestionType',
          'answers': 'Answers',
          'correctAnswer': 'CorrectAnswer',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'questionType': {
            'MULT_TEXT': 'MULT_TEXT',
            'MULT_1': 'MULT_1',
          },
        },
        new: {
          title: 'Nuevo Exam Question',
        },
        view: {
          title: 'Ver Exam Question',
        },
        importer: {
          title: 'Importar Exam Questions',
          fileName: 'examQuestion_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    examAnswer: {
        name: 'examAnswer',
        label: 'Exam Answers',
        menu: 'Exam Answers',
        exporterFileName: 'exportacion_examAnswer',
        list: {
          menu: 'Exam Answers',
          title: 'Exam Answers',
        },
        create: {
          success: 'Exam Answer guardado con éxito',
        },
        update: {
          success: 'Exam Answer guardado con éxito',
        },
        destroy: {
          success: 'Exam Answer eliminado con éxito',
        },
        destroyAll: {
          success: 'Exam Answer(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Exam Answer',
        },
        fields: {
          id: 'Id',
          'answerText': 'AnswerText',
          'order': 'Order',
          'answerType': 'AnswerType',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Exam Answer',
        },
        view: {
          title: 'Ver Exam Answer',
        },
        importer: {
          title: 'Importar Exam Answers',
          fileName: 'examAnswer_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    examResult: {
        name: 'examResult',
        label: 'Exam Results',
        menu: 'Exam Results',
        exporterFileName: 'exportacion_examResult',
        list: {
          menu: 'Exam Results',
          title: 'Exam Results',
        },
        create: {
          success: 'Exam Result guardado con éxito',
        },
        update: {
          success: 'Exam Result guardado con éxito',
        },
        destroy: {
          success: 'Exam Result eliminado con éxito',
        },
        destroyAll: {
          success: 'Exam Result(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Exam Result',
        },
        fields: {
          id: 'Id',
          'questions': 'Questions',
          'status': 'Status',
          'lecture': 'Lecture',
          'course': 'Course',
          'answers': 'Answers',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Exam Result',
        },
        view: {
          title: 'Ver Exam Result',
        },
        importer: {
          title: 'Importar Exam Results',
          fileName: 'examResult_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    answerResult: {
        name: 'answerResult',
        label: 'Answer Results',
        menu: 'Answer Results',
        exporterFileName: 'exportacion_answerResult',
        list: {
          menu: 'Answer Results',
          title: 'Answer Results',
        },
        create: {
          success: 'Answer Result guardado con éxito',
        },
        update: {
          success: 'Answer Result guardado con éxito',
        },
        destroy: {
          success: 'Answer Result eliminado con éxito',
        },
        destroyAll: {
          success: 'Answer Result(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Answer Result',
        },
        fields: {
          id: 'Id',
          'answer': 'Answer',
          'question': 'Question',
          'user': 'User',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Answer Result',
        },
        view: {
          title: 'Ver Answer Result',
        },
        importer: {
          title: 'Importar Answer Results',
          fileName: 'answerResult_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    courseResults: {
        name: 'courseResults',
        label: 'CourseResults',
        menu: 'CourseResults',
        exporterFileName: 'exportacion_courseResults',
        list: {
          menu: 'CourseResults',
          title: 'CourseResults',
        },
        create: {
          success: 'CourseResults guardado con éxito',
        },
        update: {
          success: 'CourseResults guardado con éxito',
        },
        destroy: {
          success: 'CourseResults eliminado con éxito',
        },
        destroyAll: {
          success: 'CourseResults(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar CourseResults',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo CourseResults',
        },
        view: {
          title: 'Ver CourseResults',
        },
        importer: {
          title: 'Importar CourseResults',
          fileName: 'courseResults_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },
  },
  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    createAnAccount: 'Crea una cuenta',
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url:
        'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },
  roles: {
    admin: {
      label: 'Administración',
      description: 'Acceso total a todos los recursos.',
    },
    custom: {
      label: 'Rol personalizado',
      description: 'Acceso personalizado a recursos',
    },
  },
  user: {
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      role: 'Rol',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint:
        'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratis',
      price: '$0',
    },
    growth: {
      label: 'Crecimiento',
      price: '$10',
    },
    enterprise: {
      label: 'Empresa',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      primary: 'Color primario',
      secondary: 'Color secundario',
      logos: 'Logo',
      backgroundImages: 'Imágenes de fondo',
      shade: 'Sombra',
    },
  },
  dashboard: {
    menu: 'Tablero',
    message:
      'Esta página utiliza datos falsos solo con fines de demostración. Puede editarlo en frontend/view/dashboard/DashboardPage.ts.',
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429':
      'Demasiadas solicitudes. Por favor, inténtelo de nuevo más tarde.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max:
        '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min:
        'El campo ${path} debe tener al menos ${min} elementos',
      max:
        'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size:
      'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint:
        'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },

  autocomplete: {
    loading: 'Cargando...',
    noOptions: 'Datos no encontrados',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
  table: {
    noData: 'No se encontraron registros',
    loading: 'Cargando...',
  },
  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default es;
