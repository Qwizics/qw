import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ExamQuestionViewItem from 'src/view/examQuestion/view/ExamQuestionViewItem';
import CourseLectureViewItem from 'src/view/courseLecture/view/CourseLectureViewItem';
import CourseRegistrationViewItem from 'src/view/courseRegistration/view/CourseRegistrationViewItem';
import AnswerResultViewItem from 'src/view/answerResult/view/AnswerResultViewItem';

function ExamResultView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <ExamQuestionViewItem
          label={i18n('entities.examResult.fields.questions')}
          value={record.questions}
        />

        <TextViewItem
          label={i18n('entities.examResult.fields.status')}
          value={record.status}
        />

        <CourseLectureViewItem
          label={i18n('entities.examResult.fields.lecture')}
          value={record.lecture}
        />

        <CourseRegistrationViewItem
          label={i18n('entities.examResult.fields.course')}
          value={record.course}
        />

        <AnswerResultViewItem
          label={i18n('entities.examResult.fields.answers')}
          value={record.answers}
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

export default ExamResultView;
