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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import CourseAutocompleteFormItem from 'src/view/course/autocomplete/CourseAutocompleteFormItem';
import CoursePaymentAutocompleteFormItem from 'src/view/coursePayment/autocomplete/CoursePaymentAutocompleteFormItem';

const schema = yup.object().shape({
  attendee: yupFormSchemas.relationToOne(
    i18n('entities.courseRegistration.fields.attendee'),
    {},
  ),
  course: yupFormSchemas.relationToOne(
    i18n('entities.courseRegistration.fields.course'),
    {},
  ),
  user: yupFormSchemas.relationToOne(
    i18n('entities.courseRegistration.fields.user'),
    {},
  ),
  coursePayment: yupFormSchemas.relationToOne(
    i18n('entities.courseRegistration.fields.coursePayment'),
    {},
  ),
});

function CourseRegistrationForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      attendee: record.attendee,
      course: record.course,
      user: record.user,
      coursePayment: record.coursePayment,
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
              <UserAutocompleteFormItem  
                name="user"
                label={i18n('entities.courseRegistration.fields.user')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <CoursePaymentAutocompleteFormItem  
                name="coursePayment"
                label={i18n('entities.courseRegistration.fields.coursePayment')}
                required={false}
                showCreate={!props.modal}
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
