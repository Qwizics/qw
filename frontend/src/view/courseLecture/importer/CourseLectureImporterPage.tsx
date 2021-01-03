import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/courseLecture/importer/courseLectureImporterActions';
import fields from 'src/modules/courseLecture/importer/courseLectureImporterFields';
import selectors from 'src/modules/courseLecture/importer/courseLectureImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CourseLectureImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.courseLecture.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.courseLecture.menu'), '/course-lecture'],
          [i18n('entities.courseLecture.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.courseLecture.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default CourseLectureImportPage;
