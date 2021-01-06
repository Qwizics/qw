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
import actions from 'src/modules/courseRegistration/list/courseRegistrationListActions';
import selectors from 'src/modules/courseRegistration/list/courseRegistrationListSelectors';
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
import CourseAutocompleteFormItem from 'src/view/course/autocomplete/CourseAutocompleteFormItem';
import CoursePaymentAutocompleteFormItem from 'src/view/coursePayment/autocomplete/CoursePaymentAutocompleteFormItem';

const schema = yup.object().shape({
  attendee: yupFilterSchemas.relationToOne(
    i18n('entities.courseRegistration.fields.attendee'),
  ),
  course: yupFilterSchemas.relationToOne(
    i18n('entities.courseRegistration.fields.course'),
  ),
  user: yupFilterSchemas.relationToOne(
    i18n('entities.courseRegistration.fields.user'),
  ),
  coursePayment: yupFilterSchemas.relationToOne(
    i18n('entities.courseRegistration.fields.coursePayment'),
  ),
});

const emptyValues = {
  attendee: null,
  course: null,
  user: null,
  coursePayment: null,
}

const previewRenders = {
  attendee: {
    label: i18n('entities.courseRegistration.fields.attendee'),
    render: filterRenders.relationToOne(),
  },
  course: {
      label: i18n('entities.courseRegistration.fields.course'),
      render: filterRenders.relationToOne(),
    },
  user: {
    label: i18n('entities.courseRegistration.fields.user'),
    render: filterRenders.relationToOne(),
  },
  coursePayment: {
      label: i18n('entities.courseRegistration.fields.coursePayment'),
      render: filterRenders.relationToOne(),
    },
}

function CourseRegistrationListFilter(props) {
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
                    name="attendee"
                    label={i18n('entities.courseRegistration.fields.attendee')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <CourseAutocompleteFormItem  
                    name="course"
                    label={i18n('entities.courseRegistration.fields.course')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <UserAutocompleteFormItem  
                    name="user"
                    label={i18n('entities.courseRegistration.fields.user')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <CoursePaymentAutocompleteFormItem  
                    name="coursePayment"
                    label={i18n('entities.courseRegistration.fields.coursePayment')}        
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

export default CourseRegistrationListFilter;