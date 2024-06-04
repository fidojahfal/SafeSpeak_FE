import React from 'react';
import Button from '../form/Button';
import ReportStatus from './ReportStatus';

function ReportItem({ title, _id, status, onDetail }) {
  return (
    <tr>
      <td>{title}</td>
      <td>
        <ReportStatus status={status} />
      </td>
      <td>
        <Button
          primaryOrOutline="secondary"
          onClickHandler={() => onDetail(_id)}
        >
          Detail
        </Button>
      </td>
    </tr>
  );
}

export default ReportItem;
