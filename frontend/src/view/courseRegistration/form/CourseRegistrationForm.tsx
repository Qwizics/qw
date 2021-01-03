import { Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import courseRegistrationEnumerators from 'src/modules/courseRegistration/courseRegistrationEnumerators';
import CourseAutocompleteFormItem from 'src/view/course/autocomplete/CourseAutocompleteFormItem';
import ExamAutocompleteFormItem from 'src/view/exam/autocomplete/ExamAutocompleteFormItem';

const schema = yup.object().shape({
  attendee: yupFormSchemas.relationToOne(
    i18n('entities.courseRegistration.fields.attendee'),
    {},
  ),
  course: yupFormSchemas.relationToOne(
    i18n('entities.courseRegistration.fields.course'),
    {},
  ),
  courseStatus: yupFormSchemas.enumerator(
    i18n('entities.courseRegistration.fields.courseStatus'),
    {
      "options": courseRegistrationEnumerators.courseStatus
    },
  ),
  user: yupFormSchemas.relationToOne(
    i18n('entities.courseRegistration.fields.user'),
    {},
  ),
  examTimeRemaining: yupFormSchemas.integer(
    i18n('entities.courseRegistration.fields.examTimeRemaining'),
    {},
  ),
  finalScore: yupFormSchemas.integer(
    i18n('entities.courseRegistration.fields.finalScore'),
    {},
  ),
  survey: yupFormSchemas.relationToOne(
    i18n('entities.courseRegistration.fields.survey'),
    {},
  ),
  hasHonorCode: yupFormSchemas.boolean(
    i18n('entities.courseRegistration.fields.hasHonorCode'),
    {},
  ),
});

function CourseRegistrationForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      attendee: record.attendee,
      course: record.course,
      courseStatus: record.courseStatus,
      user: record.user,
      examTimeRemaining: record.examTimeRemaining,
      finalScore: record.finalScore,
      survey: record.survey,
      hasHonorCode: record.hasHonorCode,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading, modal } = props;

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <UserAutocompleteFormItem  
                name="attendee"
                label={i18n('entities.courseRegistration.fields.attendee')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <CourseAutocompleteFormItem  
                name="course"
                label={i18n('entities.courseRegistration.fields.course')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="courseStatus"
                label={i18n('entities.courseRegistration.fields.courseStatus')}
                options={courseRegistrationEnumerators.courseStatus.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.courseRegistration.enumerators.courseStatus.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <UserAutocompleteFormItem  
                name="user"
                label={i18n('entities.courseRegistration.fields.user')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="examTimeRemaining"
                label={i18n('entities.courseRegistration.fields.examTimeRemaining')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="finalScore"
                label={i18n('entities.courseRegistration.fields.finalScore')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ExamAutocompleteFormItem  
                name="survey"
                label={i18n('entities.courseRegistration.fields.survey')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="hasHonorCode"
                label={i18n('entities.courseRegistration.fields.hasHonorCode')}
              />
            </Grid>
          </Grid>
          <FormButtons
            style={{
              flexDirection: modal
                ? 'row-reverse'
                : undefined,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
              startIcon={<SaveIcon />}
              size="small"
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              type="button"
              startIcon={<UndoIcon />}
              size="small"
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel ? (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                type="button"
                startIcon={<CloseIcon />}
                size="small"
              >
                {i18n('common.cancel')}
              </Button>
            ) : null}
          </FormButtons>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default CourseRegistrationForm;
