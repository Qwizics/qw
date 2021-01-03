import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/examAnswer/importer/examAnswerImporterActions';
import fields from 'src/modules/examAnswer/importer/examAnswerImporterFields';
import selectors from 'src/modules/examAnswer/importer/examAnswerImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ExamAnswerImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.examAnswer.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.examAnswer.menu'), '/exam-answer'],
          [i18n('entities.examAnswer.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.examAnswer.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ExamAnswerImportPage;
