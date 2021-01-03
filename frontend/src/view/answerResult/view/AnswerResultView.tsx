import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ExamAnswerViewItem from 'src/view/examAnswer/view/ExamAnswerViewItem';
import ExamQuestionViewItem from 'src/view/examQuestion/view/ExamQuestionViewItem';

function AnswerResultView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <ExamAnswerViewItem
          label={i18n('entities.answerResult.fields.answer')}
          value={record.answer}
        />

        <ExamQuestionViewItem
          label={i18n('entities.answerResult.fields.question')}
          value={record.question}
        />

        <UserViewItem
          label={i18n('entities.answerResult.fields.user')}
          value={record.user}
        />        
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default AnswerResultView;
