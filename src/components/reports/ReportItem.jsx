import React from 'react';
import Button from '../form/Button';
import ReportStatus from './ReportStatus';
import PropTypes from 'prop-types';

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

ReportItem.propTypes = {
  title: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  onDetail: PropTypes.func.isRequired,
};

export default ReportItem;
