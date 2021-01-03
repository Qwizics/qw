import React from 'react';
import { i18n } from 'src/i18n';
import ExamListFilter from 'src/view/exam/list/ExamListFilter';
import ExamListTable from 'src/view/exam/list/ExamListTable';
import ExamListToolbar from 'src/view/exam/list/ExamListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ExamListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.exam.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.exam.list.title')}
        </PageTitle>

        <ExamListToolbar />
        <ExamListFilter />
        <ExamListTable />
      </ContentWrapper>
    </>
  );
}

export default ExamListPage;
