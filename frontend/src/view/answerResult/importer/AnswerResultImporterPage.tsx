import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/answerResult/importer/answerResultImporterActions';
import fields from 'src/modules/answerResult/importer/answerResultImporterFields';
import selectors from 'src/modules/answerResult/importer/answerResultImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AnswerResultImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.answerResult.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.answerResult.menu'), '/answer-result'],
          [i18n('entities.answerResult.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.answerResult.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default AnswerResultImportPage;
