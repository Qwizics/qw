import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function CourseLectureView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.courseLecture.fields.lectureTitle')}
          value={record.lectureTitle}
        />

        <TextViewItem
          label={i18n('entities.courseLecture.fields.lectureType')}
          value={record.lectureType}
        />

        <TextViewItem
          label={i18n('entities.courseLecture.fields.lectureUrl')}
          value={record.lectureUrl}
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

export default CourseLectureView;
