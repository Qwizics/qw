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
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import CourseLectureAutocompleteFormItem from 'src/view/courseLecture/autocomplete/CourseLectureAutocompleteFormItem';
import ExamAutocompleteFormItem from 'src/view/exam/autocomplete/ExamAutocompleteFormItem';

const schema = yup.object().shape({
  owner: yupFormSchemas.relationToOne(
    i18n('entities.course.fields.owner'),
    {},
  ),
  title: yupFormSchemas.string(
    i18n('entities.course.fields.title'),
    {},
  ),
  price: yupFormSchemas.decimal(
    i18n('entities.course.fields.price'),
    {},
  ),
  lectures: yupFormSchemas.relationToMany(
    i18n('entities.course.fields.lectures'),
    {},
  ),
  courseType: yupFormSchemas.string(
    i18n('entities.course.fields.courseType'),
    {},
  ),
  exams: yupFormSchemas.relationToMany(
    i18n('entities.course.fields.exams'),
    {},
  ),
  examTimeAllowed: yupFormSchemas.integer(
    i18n('entities.course.fields.examTimeAllowed'),
    {},
  ),
  surveyRequired: yupFormSchemas.boolean(
    i18n('entities.course.fields.surveyRequired'),
    {},
  ),
  requiresHonorCode: yupFormSchemas.boolean(
    i18n('entities.course.fields.requiresHonorCode'),
    {},
  ),
  honorCodeText: yupFormSchemas.string(
    i18n('entities.course.fields.honorCodeText'),
    {},
  ),
});

function CourseForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      owner: record.owner,
      title: record.title,
      price: record.price,
      lectures: record.lectures || [],
      courseType: record.courseType,
      exams: record.exams || [],
      examTimeAllowed: record.examTimeAllowed,
      surveyRequired: record.surveyRequired,
      requiresHonorCode: record.requiresHonorCode,
      honorCodeText: record.honorCodeText,
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
                name="owner"
                label={i18n('entities.course.fields.owner')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="title"
                label={i18n('entities.course.fields.title')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="price"
                label={i18n('entities.course.fields.price')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <CourseLectureAutocompleteFormItem  
                name="lectures"
                label={i18n('entities.course.fields.lectures')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="courseType"
                label={i18n('entities.course.fields.courseType')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ExamAutocompleteFormItem  
                name="exams"
                label={i18n('entities.course.fields.exams')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="examTimeAllowed"
                label={i18n('entities.course.fields.examTimeAllowed')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="surveyRequired"
                label={i18n('entities.course.fields.surveyRequired')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="requiresHonorCode"
                label={i18n('entities.course.fields.requiresHonorCode')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="honorCodeText"
                label={i18n('entities.course.fields.honorCodeText')}  
                required={false}
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

export default CourseForm;
