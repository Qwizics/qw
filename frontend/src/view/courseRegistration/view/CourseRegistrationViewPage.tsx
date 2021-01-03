import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/courseRegistration/view/courseRegistrationViewActions';
import selectors from 'src/modules/courseRegistration/view/courseRegistrationViewSelectors';
import CourseRegistrationView from 'src/view/courseRegistration/view/CourseRegistrationView';
import CourseRegistrationViewToolbar from 'src/view/courseRegistration/view/CourseRegistrationViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CourseRegistrationPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.courseRegistration.menu'), '/course-registration'],
          [i18n('entities.courseRegistration.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.courseRegistration.view.title')}
        </PageTitle>

        <CourseRegistrationViewToolbar match={match} />

        <CourseRegistrationView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CourseRegistrationPage;
