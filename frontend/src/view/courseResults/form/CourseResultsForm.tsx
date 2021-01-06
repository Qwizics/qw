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
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import courseResultsEnumerators from 'src/modules/courseResults/courseResultsEnumerators';
import CourseLectureAutocompleteFormItem from 'src/view/courseLecture/autocomplete/CourseLectureAutocompleteFormItem';
import ExamResultAutocompleteFormItem from 'src/view/examResult/autocomplete/ExamResultAutocompleteFormItem';
import ExamAutocompleteFormItem from 'src/view/exam/autocomplete/ExamAutocompleteFormItem';

const schema = yup.object().shape({
  lectures: yupFormSchemas.relationToMany(
    i18n('entities.courseResults.fields.lectures'),
    {},
  ),
  examResults: yupFormSchemas.relationToMany(
    i18n('entities.courseResults.fields.examResults'),
    {},
  ),
  finalScore: yupFormSchemas.integer(
    i18n('entities.courseResults.fields.finalScore'),
    {},
  ),
  examTimeRemaining: yupFormSchemas.integer(
    i18n('entities.courseResults.fields.examTimeRemaining'),
    {},
  ),
  courseStatus: yupFormSchemas.enumerator(
    i18n('entities.courseResults.fields.courseStatus'),
    {
      "options": courseResultsEnumerators.courseStatus
    },
  ),
  requiresSurvey: yupFormSchemas.boolean(
    i18n('entities.courseResults.fields.requiresSurvey'),
    {},
  ),
  surveyResults: yupFormSchemas.relationToOne(
    i18n('entities.courseResults.fields.surveyResults'),
    {},
  ),
});

function CourseResultsForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      lectures: record.lectures || [],
      examResults: record.examResults || [],
      finalScore: record.finalScore,
      examTimeRemaining: record.examTimeRemaining,
      courseStatus: record.courseStatus,
      requiresSurvey: record.requiresSurvey,
      surveyResults: record.surveyResults,
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
              <CourseLectureAutocompleteFormItem  
                name="lectures"
                label={i18n('entities.courseResults.fields.lectures')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ExamResultAutocompleteFormItem  
                name="examResults"
                label={i18n('entities.courseResults.fields.examResults')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="finalScore"
                label={i18n('entities.courseResults.fields.finalScore')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="examTimeRemaining"
                label={i18n('entities.courseResults.fields.examTimeRemaining')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="courseStatus"
                label={i18n('entities.courseResults.fields.courseStatus')}
                options={courseResultsEnumerators.courseStatus.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.courseResults.enumerators.courseStatus.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="requiresSurvey"
                label={i18n('entities.courseResults.fields.requiresSurvey')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ExamAutocompleteFormItem  
                name="surveyResults"
                label={i18n('entities.courseResults.fields.surveyResults')}
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

export default CourseResultsForm;
