import React from 'react';
import { i18n } from 'src/i18n';
import ExamQuestionListFilter from 'src/view/examQuestion/list/ExamQuestionListFilter';
import ExamQuestionListTable from 'src/view/examQuestion/list/ExamQuestionListTable';
import ExamQuestionListToolbar from 'src/view/examQuestion/list/ExamQuestionListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ExamQuestionListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.examQuestion.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.examQuestion.list.title')}
        </PageTitle>

        <ExamQuestionListToolbar />
        <ExamQuestionListFilter />
        <ExamQuestionListTable />
      </ContentWrapper>
    </>
  );
}

export default ExamQuestionListPage;
