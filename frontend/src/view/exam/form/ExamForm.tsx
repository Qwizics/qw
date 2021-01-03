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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import examEnumerators from 'src/modules/exam/examEnumerators';
import ExamQuestionAutocompleteFormItem from 'src/view/examQuestion/autocomplete/ExamQuestionAutocompleteFormItem';
import CourseAutocompleteFormItem from 'src/view/course/autocomplete/CourseAutocompleteFormItem';
import CourseLectureAutocompleteFormItem from 'src/view/courseLecture/autocomplete/CourseLectureAutocompleteFormItem';

const schema = yup.object().shape({
  title: yupFormSchemas.string(
    i18n('entities.exam.fields.title'),
    {},
  ),
  questions: yupFormSchemas.relationToMany(
    i18n('entities.exam.fields.questions'),
    {},
  ),
  answersRequired: yupFormSchemas.integer(
    i18n('entities.exam.fields.answersRequired'),
    {},
  ),
  passingScore: yupFormSchemas.integer(
    i18n('entities.exam.fields.passingScore'),
    {},
  ),
  course: yupFormSchemas.relationToOne(
    i18n('entities.exam.fields.course'),
    {},
  ),
  lecture: yupFormSchemas.relationToOne(
    i18n('entities.exam.fields.lecture'),
    {},
  ),
  isRequired: yupFormSchemas.boolean(
    i18n('entities.exam.fields.isRequired'),
    {},
  ),
  examType: yupFormSchemas.enumerator(
    i18n('entities.exam.fields.examType'),
    {
      "options": examEnumerators.examType
    },
  ),
});

function ExamForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      title: record.title,
      questions: record.questions || [],
      answersRequired: record.answersRequired,
      passingScore: record.passingScore,
      course: record.course,
      lecture: record.lecture,
      isRequired: record.isRequired,
      examType: record.examType,
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
              <InputFormItem
                name="title"
                label={i18n('entities.exam.fields.title')}  
                required={false}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ExamQuestionAutocompleteFormItem  
                name="questions"
                label={i18n('entities.exam.fields.questions')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="answersRequired"
                label={i18n('entities.exam.fields.answersRequired')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="passingScore"
                label={i18n('entities.exam.fields.passingScore')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <CourseAutocompleteFormItem  
                name="course"
                label={i18n('entities.exam.fields.course')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <CourseLectureAutocompleteFormItem  
                name="lecture"
                label={i18n('entities.exam.fields.lecture')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="isRequired"
                label={i18n('entities.exam.fields.isRequired')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="examType"
                label={i18n('entities.exam.fields.examType')}
                options={examEnumerators.examType.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.exam.enumerators.examType.${value}`,
                    ),
                  }),
                )}
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

export default ExamForm;
