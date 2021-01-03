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
import actions from 'src/modules/exam/list/examListActions';
import selectors from 'src/modules/exam/list/examListSelectors';
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
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import examEnumerators from 'src/modules/exam/examEnumerators';
import CourseAutocompleteFormItem from 'src/view/course/autocomplete/CourseAutocompleteFormItem';
import CourseLectureAutocompleteFormItem from 'src/view/courseLecture/autocomplete/CourseLectureAutocompleteFormItem';

const schema = yup.object().shape({
  title: yupFilterSchemas.string(
    i18n('entities.exam.fields.title'),
  ),
  answersRequiredRange: yupFilterSchemas.integerRange(
    i18n('entities.exam.fields.answersRequiredRange'),
  ),
  passingScoreRange: yupFilterSchemas.integerRange(
    i18n('entities.exam.fields.passingScoreRange'),
  ),
  course: yupFilterSchemas.relationToOne(
    i18n('entities.exam.fields.course'),
  ),
  lecture: yupFilterSchemas.relationToOne(
    i18n('entities.exam.fields.lecture'),
  ),
  isRequired: yupFilterSchemas.boolean(
    i18n('entities.exam.fields.isRequired'),
  ),
  examType: yupFilterSchemas.enumerator(
    i18n('entities.exam.fields.examType'),
  ),
});

const emptyValues = {
  title: null,
  answersRequiredRange: [],
  passingScoreRange: [],
  course: null,
  lecture: null,
  isRequired: null,
  examType: null,
}

const previewRenders = {
  title: {
    label: i18n('entities.exam.fields.title'),
    render: filterRenders.generic(),
  },
  answersRequiredRange: {
    label: i18n('entities.exam.fields.answersRequiredRange'),
    render: filterRenders.range(),
  },
  passingScoreRange: {
    label: i18n('entities.exam.fields.passingScoreRange'),
    render: filterRenders.range(),
  },
  course: {
      label: i18n('entities.exam.fields.course'),
      render: filterRenders.relationToOne(),
    },
  lecture: {
      label: i18n('entities.exam.fields.lecture'),
      render: filterRenders.relationToOne(),
    },
  isRequired: {
    label: i18n('entities.exam.fields.isRequired'),
    render: filterRenders.boolean(),
  },
  examType: {
    label: i18n('entities.exam.fields.examType'),
    render: filterRenders.enumerator('entities.exam.enumerators.examType',),
  },
}

function ExamListFilter(props) {
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
                  <InputFormItem
                    name="title"
                    label={i18n('entities.exam.fields.title')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="answersRequiredRange"
                    label={i18n('entities.exam.fields.answersRequiredRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="passingScoreRange"
                    label={i18n('entities.exam.fields.passingScoreRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <CourseAutocompleteFormItem  
                    name="course"
                    label={i18n('entities.exam.fields.course')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <CourseLectureAutocompleteFormItem  
                    name="lecture"
                    label={i18n('entities.exam.fields.lecture')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="isRequired"
                    label={i18n('entities.exam.fields.isRequired')}
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

export default ExamListFilter;