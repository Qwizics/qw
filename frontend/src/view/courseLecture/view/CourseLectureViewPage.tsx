import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/courseLecture/view/courseLectureViewActions';
import selectors from 'src/modules/courseLecture/view/courseLectureViewSelectors';
import CourseLectureView from 'src/view/courseLecture/view/CourseLectureView';
import CourseLectureViewToolbar from 'src/view/courseLecture/view/CourseLectureViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CourseLecturePage() {
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
          [i18n('entities.courseLecture.menu'), '/course-lecture'],
          [i18n('entities.courseLecture.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.courseLecture.view.title')}
        </PageTitle>

        <CourseLectureViewToolbar match={match} />

        <CourseLectureView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CourseLecturePage;
