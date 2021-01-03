import React from 'react';
import { i18n } from 'src/i18n';
import AnswerResultListFilter from 'src/view/answerResult/list/AnswerResultListFilter';
import AnswerResultListTable from 'src/view/answerResult/list/AnswerResultListTable';
import AnswerResultListToolbar from 'src/view/answerResult/list/AnswerResultListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AnswerResultListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.answerResult.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.answerResult.list.title')}
        </PageTitle>

        <AnswerResultListToolbar />
        <AnswerResultListFilter />
        <AnswerResultListTable />
      </ContentWrapper>
    </>
  );
}

export default AnswerResultListPage;
