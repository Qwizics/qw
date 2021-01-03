const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
    select: 'Selecionar',
    continue: 'Continuar',
    filters: 'Filtros',
  },

  app: {
    title: 'Aplicação',
  },

  entities: {
    course: {
        name: 'Course',
        label: 'Courses',
        menu: 'Courses',
        exporterFileName: 'Course_exportados',
        list: {
          menu: 'Courses',
          title: 'Courses',
        },
        create: {
          success: 'Course salvo com sucesso',
        },
        update: {
          success: 'Course salvo com sucesso',
        },
        destroy: {
          success: 'Course deletado com sucesso',
        },
        destroyAll: {
          success: 'Course(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Course',
        },
        view: {
          title: 'Visualizar Course',
        },
        importer: {
          title: 'Importar Courses',
          fileName: 'course_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    courseRegistration: {
        name: 'Course Registration',
        label: 'Course Registrations',
        menu: 'Course Registrations',
        exporterFileName: 'Course Registration_exportados',
        list: {
          menu: 'Course Registrations',
          title: 'Course Registrations',
        },
        create: {
          success: 'Course Registration salvo com sucesso',
        },
        update: {
          success: 'Course Registration salvo com sucesso',
        },
        destroy: {
          success: 'Course Registration deletado com sucesso',
        },
        destroyAll: {
          success: 'Course Registration(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Course Registration',
        },
        fields: {
          id: 'Id',
          'attendee': 'Attendee',
          'course': 'Course',
          'courseStatus': 'CourseStatus',
          'user': 'User',
          'examTimeRemainingRange': 'ExamTimeRemaining',
          'examTimeRemaining': 'ExamTimeRemaining',
          'finalScoreRange': 'FinalScore',
          'finalScore': 'FinalScore',
          'survey': 'Survey',
          'hasHonorCode': 'HasHonorCode',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'courseStatus': {
            'OPEN': 'OPEN',
            'OPEN_EXAM': 'OPEN_EXAM',
            'PASSED': 'PASSED',
            'FAILED': 'FAILED',
          },
        },
        new: {
          title: 'Novo Course Registration',
        },
        view: {
          title: 'Visualizar Course Registration',
        },
        importer: {
          title: 'Importar Course Registrations',
          fileName: 'courseRegistration_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    exam: {
        name: 'Exam',
        label: 'Exams',
        menu: 'Exams',
        exporterFileName: 'Exam_exportados',
        list: {
          menu: 'Exams',
          title: 'Exams',
        },
        create: {
          success: 'Exam salvo com sucesso',
        },
        update: {
          success: 'Exam salvo com sucesso',
        },
        destroy: {
          success: 'Exam deletado com sucesso',
        },
        destroyAll: {
          success: 'Exam(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'examType': {
            'SURVEY': 'SURVEY',
            'EXAM': 'EXAM',
          },
        },
        new: {
          title: 'Novo Exam',
        },
        view: {
          title: 'Visualizar Exam',
        },
        importer: {
          title: 'Importar Exams',
          fileName: 'exam_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    courseLecture: {
        name: 'Course Lecture',
        label: 'Course Lectures',
        menu: 'Course Lectures',
        exporterFileName: 'Course Lecture_exportados',
        list: {
          menu: 'Course Lectures',
          title: 'Course Lectures',
        },
        create: {
          success: 'Course Lecture salvo com sucesso',
        },
        update: {
          success: 'Course Lecture salvo com sucesso',
        },
        destroy: {
          success: 'Course Lecture deletado com sucesso',
        },
        destroyAll: {
          success: 'Course Lecture(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Course Lecture',
        },
        fields: {
          id: 'Id',
          'lectureTitle': 'LectureTitle',
          'lectureType': 'LectureType',
          'lectureUrl': 'LectureUrl',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Course Lecture',
        },
        view: {
          title: 'Visualizar Course Lecture',
        },
        importer: {
          title: 'Importar Course Lectures',
          fileName: 'courseLecture_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    coursePayment: {
        name: 'Course Payment',
        label: 'Course Payments',
        menu: 'Course Payments',
        exporterFileName: 'Course Payment_exportados',
        list: {
          menu: 'Course Payments',
          title: 'Course Payments',
        },
        create: {
          success: 'Course Payment salvo com sucesso',
        },
        update: {
          success: 'Course Payment salvo com sucesso',
        },
        destroy: {
          success: 'Course Payment deletado com sucesso',
        },
        destroyAll: {
          success: 'Course Payment(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Course Payment',
        },
        fields: {
          id: 'Id',
          'transaction': 'Transaction',
          'paymentRange': 'Payment',
          'payment': 'Payment',
          'courseRegistration': 'CourseRegistration',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Course Payment',
        },
        view: {
          title: 'Visualizar Course Payment',
        },
        importer: {
          title: 'Importar Course Payments',
          fileName: 'coursePayment_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    examQuestion: {
        name: 'Exam Question',
        label: 'Exam Questions',
        menu: 'Exam Questions',
        exporterFileName: 'Exam Question_exportados',
        list: {
          menu: 'Exam Questions',
          title: 'Exam Questions',
        },
        create: {
          success: 'Exam Question salvo com sucesso',
        },
        update: {
          success: 'Exam Question salvo com sucesso',
        },
        destroy: {
          success: 'Exam Question deletado com sucesso',
        },
        destroyAll: {
          success: 'Exam Question(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Exam Question',
        },
        view: {
          title: 'Visualizar Exam Question',
        },
        importer: {
          title: 'Importar Exam Questions',
          fileName: 'examQuestion_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    examAnswer: {
        name: 'Exam Answer',
        label: 'Exam Answers',
        menu: 'Exam Answers',
        exporterFileName: 'Exam Answer_exportados',
        list: {
          menu: 'Exam Answers',
          title: 'Exam Answers',
        },
        create: {
          success: 'Exam Answer salvo com sucesso',
        },
        update: {
          success: 'Exam Answer salvo com sucesso',
        },
        destroy: {
          success: 'Exam Answer deletado com sucesso',
        },
        destroyAll: {
          success: 'Exam Answer(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Exam Answer',
        },
        fields: {
          id: 'Id',
          'answerText': 'AnswerText',
          'order': 'Order',
          'answerType': 'AnswerType',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Exam Answer',
        },
        view: {
          title: 'Visualizar Exam Answer',
        },
        importer: {
          title: 'Importar Exam Answers',
          fileName: 'examAnswer_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    examResult: {
        name: 'Exam Result',
        label: 'Exam Results',
        menu: 'Exam Results',
        exporterFileName: 'Exam Result_exportados',
        list: {
          menu: 'Exam Results',
          title: 'Exam Results',
        },
        create: {
          success: 'Exam Result salvo com sucesso',
        },
        update: {
          success: 'Exam Result salvo com sucesso',
        },
        destroy: {
          success: 'Exam Result deletado com sucesso',
        },
        destroyAll: {
          success: 'Exam Result(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Exam Result',
        },
        view: {
          title: 'Visualizar Exam Result',
        },
        importer: {
          title: 'Importar Exam Results',
          fileName: 'examResult_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    answerResult: {
        name: 'Answer Result',
        label: 'Answer Results',
        menu: 'Answer Results',
        exporterFileName: 'Answer Result_exportados',
        list: {
          menu: 'Answer Results',
          title: 'Answer Results',
        },
        create: {
          success: 'Answer Result salvo com sucesso',
        },
        update: {
          success: 'Answer Result salvo com sucesso',
        },
        destroy: {
          success: 'Answer Result deletado com sucesso',
        },
        destroyAll: {
          success: 'Answer Result(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Answer Result',
        },
        fields: {
          id: 'Id',
          'answer': 'Answer',
          'question': 'Question',
          'user': 'User',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Answer Result',
        },
        view: {
          title: 'Visualizar Answer Result',
        },
        importer: {
          title: 'Importar Answer Results',
          fileName: 'answerResult_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },
    
  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists: 'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
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

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success: 'Configurações salvas com sucesso.',
    },
    fields: {
      primary: 'Cor Primária',
      secondary: 'Cor Secundária',
      shade: 'Tom',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
  },
  dashboard: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: '${path} deve possuir ao menos ${min} itens',
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default ptBR;
