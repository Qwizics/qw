import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/courseRegistration/importer/courseRegistrationImporterActions';
import fields from 'src/modules/courseRegistration/importer/courseRegistrationImporterFields';
import selectors from 'src/modules/courseRegistration/importer/courseRegistrationImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CourseRegistrationImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.courseRegistration.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.courseRegistration.menu'), '/course-registration'],
          [i18n('entities.courseRegistration.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.courseRegistration.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default CourseRegistrationImportPage;
