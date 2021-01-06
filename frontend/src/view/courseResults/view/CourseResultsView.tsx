import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CourseLectureViewItem from 'src/view/courseLecture/view/CourseLectureViewItem';
import ExamResultViewItem from 'src/view/examResult/view/ExamResultViewItem';
import ExamViewItem from 'src/view/exam/view/ExamViewItem';

function CourseResultsView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <CourseLectureViewItem
          label={i18n('entities.courseResults.fields.lectures')}
          value={record.lectures}
        />

        <ExamResultViewItem
          label={i18n('entities.courseResults.fields.examResults')}
          value={record.examResults}
        />

        <TextViewItem
          label={i18n('entities.courseResults.fields.finalScore')}
          value={record.finalScore}
        />

        <TextViewItem
          label={i18n('entities.courseResults.fields.examTimeRemaining')}
          value={record.examTimeRemaining}
        />

        <TextViewItem
          label={i18n('entities.courseResults.fields.courseStatus')}
          value={
            record.courseStatus &&
            i18n(
              `entities.courseResults.enumerators.courseStatus.${record.courseStatus}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.courseResults.fields.requiresSurvey')}
          value={
            record.requiresSurvey
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <ExamViewItem
          label={i18n('entities.courseResults.fields.surveyResults')}
          value={record.surveyResults}
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

export default CourseResultsView;
