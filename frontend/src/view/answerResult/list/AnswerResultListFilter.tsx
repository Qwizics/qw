import {
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/answerResult/list/answerResultListActions';
import selectors from 'src/modules/answerResult/list/answerResultListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import FilterAccordion from 'src/view/shared/filter/FilterAccordion';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import ExamAnswerAutocompleteFormItem from 'src/view/examAnswer/autocomplete/ExamAnswerAutocompleteFormItem';
import ExamQuestionAutocompleteFormItem from 'src/view/examQuestion/autocomplete/ExamQuestionAutocompleteFormItem';

const schema = yup.object().shape({
  answer: yupFilterSchemas.relationToOne(
    i18n('entities.answerResult.fields.answer'),
  ),
  question: yupFilterSchemas.relationToOne(
    i18n('entities.answerResult.fields.question'),
  ),
  user: yupFilterSchemas.relationToOne(
    i18n('entities.answerResult.fields.user'),
  ),
});

const emptyValues = {
  answer: null,
  question: null,
  user: null,
}

const previewRenders = {
  answer: {
      label: i18n('entities.answerResult.fields.answer'),
      render: filterRenders.relationToOne(),
    },
  question: {
      label: i18n('entities.answerResult.fields.question'),
      render: filterRenders.relationToOne(),
    },
  user: {
    label: i18n('entities.answerResult.fields.user'),
    render: filterRenders.relationToOne(),
  },
}

function AnswerResultListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  return (
    <FilterWrapper>
      <FilterAccordion
        expanded={expanded}
        onChange={(event, isExpanded) =>
          setExpanded(isExpanded)
        }
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FilterPreview
            values={rawFilter}
            renders={previewRenders}
            expanded={expanded}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                  <ExamAnswerAutocompleteFormItem  
                    name="answer"
                    label={i18n('entities.answerResult.fields.answer')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <ExamQuestionAutocompleteFormItem  
                    name="question"
                    label={i18n('entities.answerResult.fields.question')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <UserAutocompleteFormItem  
                    name="user"
                    label={i18n('entities.answerResult.fields.user')}        
                  />
                </Grid>
              </Grid>

              <FilterButtons>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={props.loading}
                  startIcon={<SearchIcon />}
                  size="small"
                >
                  {i18n('common.search')}
                </Button>

                <Button
                  type="button"
                  onClick={onReset}
                  disabled={props.loading}
                  startIcon={<UndoIcon />}
                  size="small"
                >
                  {i18n('common.reset')}
                </Button>
              </FilterButtons>
            </form>
          </FormProvider>
        </AccordionDetails>
      </FilterAccordion>
    </FilterWrapper>
  );
}

export default AnswerResultListFilter;