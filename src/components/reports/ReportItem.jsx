import React from 'react';
import Button from '../form/Button';
import ReportStatus from './ReportStatus';

function ReportItem({ title, id, status }) {
  return (
    <tr>
      <td>{title}</td>
      <td>
        <ReportStatus status={status} />
      </td>
      <td>
        <Button primaryOrOutline="secondary" onClickHandler={() => {}}>
          Detail
        </Button>
      </td>
    </tr>
  );
}

export default ReportItem;
