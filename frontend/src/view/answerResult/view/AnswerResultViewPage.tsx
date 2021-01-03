import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/answerResult/view/answerResultViewActions';
import selectors from 'src/modules/answerResult/view/answerResultViewSelectors';
import AnswerResultView from 'src/view/answerResult/view/AnswerResultView';
import AnswerResultViewToolbar from 'src/view/answerResult/view/AnswerResultViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AnswerResultPage() {
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
          [i18n('entities.answerResult.menu'), '/answer-result'],
          [i18n('entities.answerResult.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.answerResult.view.title')}
        </PageTitle>

        <AnswerResultViewToolbar match={match} />

        <AnswerResultView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default AnswerResultPage;
