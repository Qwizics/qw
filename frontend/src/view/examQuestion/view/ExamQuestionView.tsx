import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ExamAnswerViewItem from 'src/view/examAnswer/view/ExamAnswerViewItem';

function ExamQuestionView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.examQuestion.fields.textValue')}
          value={record.textValue}
        />

        <TextViewItem
          label={i18n('entities.examQuestion.fields.questionType')}
          value={record.questionType}
        />

        <ExamAnswerViewItem
          label={i18n('entities.examQuestion.fields.answers')}
          value={record.answers}
        />

        <ExamAnswerViewItem
          label={i18n('entities.examQuestion.fields.correctAnswer')}
          value={record.correctAnswer}
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

export default ExamQuestionView;
