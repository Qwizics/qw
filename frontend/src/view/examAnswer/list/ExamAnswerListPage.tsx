import React from 'react';
import { i18n } from 'src/i18n';
import ExamAnswerListFilter from 'src/view/examAnswer/list/ExamAnswerListFilter';
import ExamAnswerListTable from 'src/view/examAnswer/list/ExamAnswerListTable';
import ExamAnswerListToolbar from 'src/view/examAnswer/list/ExamAnswerListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ExamAnswerListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.examAnswer.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.examAnswer.list.title')}
        </PageTitle>

        <ExamAnswerListToolbar />
        <ExamAnswerListFilter />
        <ExamAnswerListTable />
      </ContentWrapper>
    </>
  );
}

export default ExamAnswerListPage;
