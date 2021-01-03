import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import CourseViewItem from 'src/view/course/view/CourseViewItem';
import ExamViewItem from 'src/view/exam/view/ExamViewItem';

function CourseRegistrationView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <UserViewItem
          label={i18n('entities.courseRegistration.fields.attendee')}
          value={record.attendee}
        />

        <CourseViewItem
          label={i18n('entities.courseRegistration.fields.course')}
          value={record.course}
        />

        <TextViewItem
          label={i18n('entities.courseRegistration.fields.courseStatus')}
          value={
            record.courseStatus &&
            i18n(
              `entities.courseRegistration.enumerators.courseStatus.${record.courseStatus}`,
            )
          }
        />

        <UserViewItem
          label={i18n('entities.courseRegistration.fields.user')}
          value={record.user}
        />

        <TextViewItem
          label={i18n('entities.courseRegistration.fields.examTimeRemaining')}
          value={record.examTimeRemaining}
        />

        <TextViewItem
          label={i18n('entities.courseRegistration.fields.finalScore')}
          value={record.finalScore}
        />

        <ExamViewItem
          label={i18n('entities.courseRegistration.fields.survey')}
          value={record.survey}
        />

        <TextViewItem
          label={i18n('entities.courseRegistration.fields.hasHonorCode')}
          value={
            record.hasHonorCode
              ? i18n('common.yes')
              : i18n('common.no')
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

export default CourseRegistrationView;
