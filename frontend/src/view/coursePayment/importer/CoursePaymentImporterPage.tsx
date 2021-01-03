import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/coursePayment/importer/coursePaymentImporterActions';
import fields from 'src/modules/coursePayment/importer/coursePaymentImporterFields';
import selectors from 'src/modules/coursePayment/importer/coursePaymentImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CoursePaymentImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.coursePayment.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.coursePayment.menu'), '/course-payment'],
          [i18n('entities.coursePayment.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.coursePayment.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default CoursePaymentImportPage;
