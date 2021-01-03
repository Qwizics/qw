import React from 'react';
import { i18n } from 'src/i18n';
import CourseLectureListFilter from 'src/view/courseLecture/list/CourseLectureListFilter';
import CourseLectureListTable from 'src/view/courseLecture/list/CourseLectureListTable';
import CourseLectureListToolbar from 'src/view/courseLecture/list/CourseLectureListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CourseLectureListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.courseLecture.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.courseLecture.list.title')}
        </PageTitle>

        <CourseLectureListToolbar />
        <CourseLectureListFilter />
        <CourseLectureListTable />
      </ContentWrapper>
    </>
  );
}

export default CourseLectureListPage;
