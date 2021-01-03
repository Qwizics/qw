import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/coursePayment/view/coursePaymentViewActions';
import selectors from 'src/modules/coursePayment/view/coursePaymentViewSelectors';
import CoursePaymentView from 'src/view/coursePayment/view/CoursePaymentView';
import CoursePaymentViewToolbar from 'src/view/coursePayment/view/CoursePaymentViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CoursePaymentPage() {
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
          [i18n('entities.coursePayment.menu'), '/course-payment'],
          [i18n('entities.coursePayment.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.coursePayment.view.title')}
        </PageTitle>

        <CoursePaymentViewToolbar match={match} />

        <CoursePaymentView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CoursePaymentPage;
