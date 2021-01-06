import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import UserViewItem from 'src/view/user/view/UserViewItem';
import CourseViewItem from 'src/view/course/view/CourseViewItem';
import CoursePaymentViewItem from 'src/view/coursePayment/view/CoursePaymentViewItem';

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

        <UserViewItem
          label={i18n('entities.courseRegistration.fields.user')}
          value={record.user}
        />

        <CoursePaymentViewItem
          label={i18n('entities.courseRegistration.fields.coursePayment')}
          value={record.coursePayment}
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
