import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/courseResults/view/courseResultsViewActions';
import selectors from 'src/modules/courseResults/view/courseResultsViewSelectors';
import CourseResultsView from 'src/view/courseResults/view/CourseResultsView';
import CourseResultsViewToolbar from 'src/view/courseResults/view/CourseResultsViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CourseResultsPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.courseResults.menu'), '/course-results'],
          [i18n('entities.courseResults.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.courseResults.view.title')}
        </PageTitle>

        <CourseResultsViewToolbar match={match} />

        <CourseResultsView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CourseResultsPage;
