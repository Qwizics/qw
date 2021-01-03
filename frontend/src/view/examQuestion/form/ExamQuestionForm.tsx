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
import ExamAnswerAutocompleteFormItem from 'src/view/examAnswer/autocomplete/ExamAnswerAutocompleteFormItem';

const schema = yup.object().shape({
  textValue: yupFormSchemas.string(
    i18n('entities.examQuestion.fields.textValue'),
    {},
  ),
  questionType: yupFormSchemas.string(
    i18n('entities.examQuestion.fields.questionType'),
    {},
  ),
  answers: yupFormSchemas.relationToMany(
    i18n('entities.examQuestion.fields.answers'),
    {},
  ),
  correctAnswer: yupFormSchemas.relationToOne(
    i18n('entities.examQuestion.fields.correctAnswer'),
    {},
  ),
});

function ExamQuestionForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      textValue: record.textValue,
      questionType: record.questionType,
      answers: record.answers || [],
      correctAnswer: record.correctAnswer,
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
              <TextAreaFormItem
                name="textValue"
                label={i18n('entities.examQuestion.fields.textValue')}  
                required={false}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="questionType"
                label={i18n('entities.examQuestion.fields.questionType')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ExamAnswerAutocompleteFormItem  
                name="answers"
                label={i18n('entities.examQuestion.fields.answers')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ExamAnswerAutocompleteFormItem  
                name="correctAnswer"
                label={i18n('entities.examQuestion.fields.correctAnswer')}
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

export default ExamQuestionForm;
