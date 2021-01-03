import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/examQuestion/importer/examQuestionImporterActions';
import fields from 'src/modules/examQuestion/importer/examQuestionImporterFields';
import selectors from 'src/modules/examQuestion/importer/examQuestionImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ExamQuestionImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.examQuestion.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.examQuestion.menu'), '/exam-question'],
          [i18n('entities.examQuestion.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.examQuestion.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ExamQuestionImportPage;
