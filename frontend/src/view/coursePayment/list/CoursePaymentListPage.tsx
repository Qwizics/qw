import React from 'react';
import { i18n } from 'src/i18n';
import CoursePaymentListFilter from 'src/view/coursePayment/list/CoursePaymentListFilter';
import CoursePaymentListTable from 'src/view/coursePayment/list/CoursePaymentListTable';
import CoursePaymentListToolbar from 'src/view/coursePayment/list/CoursePaymentListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CoursePaymentListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.coursePayment.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.coursePayment.list.title')}
        </PageTitle>

        <CoursePaymentListToolbar />
        <CoursePaymentListFilter />
        <CoursePaymentListTable />
      </ContentWrapper>
    </>
  );
}

export default CoursePaymentListPage;
