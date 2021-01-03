import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CourseRegistrationViewItem from 'src/view/courseRegistration/view/CourseRegistrationViewItem';

function CoursePaymentView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.coursePayment.fields.transaction')}
          value={record.transaction}
        />

        <TextViewItem
          label={i18n('entities.coursePayment.fields.payment')}
          value={record.payment}
        />

        <CourseRegistrationViewItem
          label={i18n('entities.coursePayment.fields.courseRegistration')}
          value={record.courseRegistration}
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

export default CoursePaymentView;
