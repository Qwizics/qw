import React from 'react';
import { i18n } from 'src/i18n';
import CourseResultsListFilter from 'src/view/courseResults/list/CourseResultsListFilter';
import CourseResultsListTable from 'src/view/courseResults/list/CourseResultsListTable';
import CourseResultsListToolbar from 'src/view/courseResults/list/CourseResultsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CourseResultsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.courseResults.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.courseResults.list.title')}
        </PageTitle>

        <CourseResultsListToolbar />
        <CourseResultsListFilter />
        <CourseResultsListTable />
      </ContentWrapper>
    </>
  );
}

export default CourseResultsListPage;
