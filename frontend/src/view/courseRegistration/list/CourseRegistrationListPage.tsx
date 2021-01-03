import React from 'react';
import { i18n } from 'src/i18n';
import CourseRegistrationListFilter from 'src/view/courseRegistration/list/CourseRegistrationListFilter';
import CourseRegistrationListTable from 'src/view/courseRegistration/list/CourseRegistrationListTable';
import CourseRegistrationListToolbar from 'src/view/courseRegistration/list/CourseRegistrationListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CourseRegistrationListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.courseRegistration.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.courseRegistration.list.title')}
        </PageTitle>

        <CourseRegistrationListToolbar />
        <CourseRegistrationListFilter />
        <CourseRegistrationListTable />
      </ContentWrapper>
    </>
  );
}

export default CourseRegistrationListPage;
