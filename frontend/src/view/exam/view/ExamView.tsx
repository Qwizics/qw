import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ExamQuestionViewItem from 'src/view/examQuestion/view/ExamQuestionViewItem';
import CourseViewItem from 'src/view/course/view/CourseViewItem';
import CourseLectureViewItem from 'src/view/courseLecture/view/CourseLectureViewItem';

function ExamView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.exam.fields.title')}
          value={record.title}
        />

        <ExamQuestionViewItem
          label={i18n('entities.exam.fields.questions')}
          value={record.questions}
        />

        <TextViewItem
          label={i18n('entities.exam.fields.answersRequired')}
          value={record.answersRequired}
        />

        <TextViewItem
          label={i18n('entities.exam.fields.passingScore')}
          value={record.passingScore}
        />

        <CourseViewItem
          label={i18n('entities.exam.fields.course')}
          value={record.course}
        />

        <CourseLectureViewItem
          label={i18n('entities.exam.fields.lecture')}
          value={record.lecture}
        />

        <TextViewItem
          label={i18n('entities.exam.fields.isRequired')}
          value={
            record.isRequired
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.exam.fields.examType')}
          value={
            record.examType &&
            i18n(
              `entities.exam.enumerators.examType.${record.examType}`,
            )
          }
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

export default ExamView;
