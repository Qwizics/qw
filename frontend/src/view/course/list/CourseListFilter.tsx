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
import actions from 'src/modules/course/list/courseListActions';
import selectors from 'src/modules/course/list/courseListSelectors';
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
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';

const schema = yup.object().shape({
  owner: yupFilterSchemas.relationToOne(
    i18n('entities.course.fields.owner'),
  ),
  title: yupFilterSchemas.string(
    i18n('entities.course.fields.title'),
  ),
  priceRange: yupFilterSchemas.decimalRange(
    i18n('entities.course.fields.priceRange'),
  ),
  courseType: yupFilterSchemas.string(
    i18n('entities.course.fields.courseType'),
  ),
  examTimeAllowedRange: yupFilterSchemas.integerRange(
    i18n('entities.course.fields.examTimeAllowedRange'),
  ),
  surveyRequired: yupFilterSchemas.boolean(
    i18n('entities.course.fields.surveyRequired'),
  ),
  requiresHonorCode: yupFilterSchemas.boolean(
    i18n('entities.course.fields.requiresHonorCode'),
  ),
  honorCodeText: yupFilterSchemas.string(
    i18n('entities.course.fields.honorCodeText'),
  ),
});

const emptyValues = {
  owner: null,
  title: null,
  priceRange: [],
  courseType: null,
  examTimeAllowedRange: [],
  surveyRequired: null,
  requiresHonorCode: null,
  honorCodeText: null,
}

const previewRenders = {
  owner: {
    label: i18n('entities.course.fields.owner'),
    render: filterRenders.relationToOne(),
  },
  title: {
    label: i18n('entities.course.fields.title'),
    render: filterRenders.generic(),
  },
  priceRange: {
    label: i18n('entities.course.fields.priceRange'),
    render: filterRenders.decimalRange(),
  },
  courseType: {
    label: i18n('entities.course.fields.courseType'),
    render: filterRenders.generic(),
  },
  examTimeAllowedRange: {
    label: i18n('entities.course.fields.examTimeAllowedRange'),
    render: filterRenders.range(),
  },
  surveyRequired: {
    label: i18n('entities.course.fields.surveyRequired'),
    render: filterRenders.boolean(),
  },
  requiresHonorCode: {
    label: i18n('entities.course.fields.requiresHonorCode'),
    render: filterRenders.boolean(),
  },
  honorCodeText: {
    label: i18n('entities.course.fields.honorCodeText'),
    render: filterRenders.generic(),
  },
}

function CourseListFilter(props) {
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
                  <UserAutocompleteFormItem  
                    name="owner"
                    label={i18n('entities.course.fields.owner')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="title"
                    label={i18n('entities.course.fields.title')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="priceRange"
                    label={i18n('entities.course.fields.priceRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="courseType"
                    label={i18n('entities.course.fields.courseType')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="examTimeAllowedRange"
                    label={i18n('entities.course.fields.examTimeAllowedRange')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="surveyRequired"
                    label={i18n('entities.course.fields.surveyRequired')}
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
                    name="requiresHonorCode"
                    label={i18n('entities.course.fields.requiresHonorCode')}
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
                  <InputFormItem
                    name="honorCodeText"
                    label={i18n('entities.course.fields.honorCodeText')}      
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

export default CourseListFilter;