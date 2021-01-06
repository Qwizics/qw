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
import actions from 'src/modules/courseResults/list/courseResultsListActions';
import selectors from 'src/modules/courseResults/list/courseResultsListSelectors';
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
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import courseResultsEnumerators from 'src/modules/courseResults/courseResultsEnumerators';
import ExamAutocompleteFormItem from 'src/view/exam/autocomplete/ExamAutocompleteFormItem';

const schema = yup.object().shape({
  finalScoreRange: yupFilterSchemas.integerRange(
    i18n('entities.courseResults.fields.finalScoreRange'),
  ),
  examTimeRemainingRange: yupFilterSchemas.integerRange(
    i18n('entities.courseResults.fields.examTimeRemainingRange'),
  ),
  courseStatus: yupFilterSchemas.enumerator(
    i18n('entities.courseResults.fields.courseStatus'),
  ),
  requiresSurvey: yupFilterSchemas.boolean(
    i18n('entities.courseResults.fields.requiresSurvey'),
  ),
  surveyResults: yupFilterSchemas.relationToOne(
    i18n('entities.courseResults.fields.surveyResults'),
  ),
});

const emptyValues = {
  finalScoreRange: [],
  examTimeRemainingRange: [],
  courseStatus: null,
  requiresSurvey: null,
  surveyResults: null,
}

const previewRenders = {
  finalScoreRange: {
    label: i18n('entities.courseResults.fields.finalScoreRange'),
    render: filterRenders.range(),
  },
  examTimeRemainingRange: {
    label: i18n('entities.courseResults.fields.examTimeRemainingRange'),
    render: filterRenders.range(),
  },
  courseStatus: {
    label: i18n('entities.courseResults.fields.courseStatus'),
    render: filterRenders.enumerator('entities.courseResults.enumerators.courseStatus',),
  },
  requiresSurvey: {
    label: i18n('entities.courseResults.fields.requiresSurvey'),
    render: filterRenders.boolean(),
  },
  surveyResults: {
      label: i18n('entities.courseResults.fields.surveyResults'),
      render: filterRenders.relationToOne(),
    },
}

function CourseResultsListFilter(props) {
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
                  <InputNumberRangeFormItem
                    name="finalScoreRange"
                    label={i18n('entities.courseResults.fields.finalScoreRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="examTimeRemainingRange"
                    label={i18n('entities.courseResults.fields.examTimeRemainingRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
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
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="requiresSurvey"
                    label={i18n('entities.courseResults.fields.requiresSurvey')}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <ExamAutocompleteFormItem  
                    name="surveyResults"
                    label={i18n('entities.courseResults.fields.surveyResults')}        
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

export default CourseResultsListFilter;