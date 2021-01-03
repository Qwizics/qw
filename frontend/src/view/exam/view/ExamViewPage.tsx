import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/exam/view/examViewActions';
import selectors from 'src/modules/exam/view/examViewSelectors';
import ExamView from 'src/view/exam/view/ExamView';
import ExamViewToolbar from 'src/view/exam/view/ExamViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ExamPage() {
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
          [i18n('entities.exam.menu'), '/exam'],
          [i18n('entities.exam.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.exam.view.title')}
        </PageTitle>

        <ExamViewToolbar match={match} />

        <ExamView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ExamPage;
