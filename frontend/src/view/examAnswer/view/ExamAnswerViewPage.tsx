import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/examAnswer/view/examAnswerViewActions';
import selectors from 'src/modules/examAnswer/view/examAnswerViewSelectors';
import ExamAnswerView from 'src/view/examAnswer/view/ExamAnswerView';
import ExamAnswerViewToolbar from 'src/view/examAnswer/view/ExamAnswerViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ExamAnswerPage() {
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
          [i18n('entities.examAnswer.menu'), '/exam-answer'],
          [i18n('entities.examAnswer.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.examAnswer.view.title')}
        </PageTitle>

        <ExamAnswerViewToolbar match={match} />

        <ExamAnswerView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ExamAnswerPage;
