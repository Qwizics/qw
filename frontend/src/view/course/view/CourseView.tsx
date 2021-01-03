import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import CourseLectureViewItem from 'src/view/courseLecture/view/CourseLectureViewItem';
import ExamViewItem from 'src/view/exam/view/ExamViewItem';

function CourseView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <UserViewItem
          label={i18n('entities.course.fields.owner')}
          value={record.owner}
        />

        <TextViewItem
          label={i18n('entities.course.fields.title')}
          value={record.title}
        />

        <TextViewItem
          label={i18n('entities.course.fields.price')}
          value={record.price}
        />

        <CourseLectureViewItem
          label={i18n('entities.course.fields.lectures')}
          value={record.lectures}
        />

        <TextViewItem
          label={i18n('entities.course.fields.courseType')}
          value={record.courseType}
        />

        <ExamViewItem
          label={i18n('entities.course.fields.exams')}
          value={record.exams}
        />

        <TextViewItem
          label={i18n('entities.course.fields.examTimeAllowed')}
          value={record.examTimeAllowed}
        />

        <TextViewItem
          label={i18n('entities.course.fields.surveyRequired')}
          value={
            record.surveyRequired
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.course.fields.requiresHonorCode')}
          value={
            record.requiresHonorCode
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.course.fields.honorCodeText')}
          value={record.honorCodeText}
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

export default CourseView;
