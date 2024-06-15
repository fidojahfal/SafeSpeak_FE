import React from 'react';
import ReportItem from './ReportItem';
import Button from '../form/Button';
import Alert from '../form/Alert';
import PropTypes from 'prop-types';

function ReportList({ reports, user, onCreate, onDetail }) {
  return (
    <div className="px-xl-5">
      <Alert />
      <h3 className="text-primary fw-bold text-center mb-5 mt-3">
        {user.role ? 'Daftar Laporan' : 'Laporan Saya'}
      </h3>
      {!user.role && (
        <div className="d-flex justify-content-end mb-3">
          <Button
            marginClass="text-center"
            primaryOrOutline="primary"
            onClickHandler={onCreate}
          >
            Buat Laporan Baru
          </Button>
        </div>
      )}
      <table className="table table-striped mb-3">
        <thead>
          <tr className="table-primary">
            <th scope="col" style={{ width: '80%' }}>
              Judul Laporan
            </th>
            <th scope="col">Status</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {reports.length !== 0 ? (
            reports.map((report) => (
              <ReportItem key={report._id} onDetail={onDetail} {...report} />
            ))
          ) : (
            <tr>
              <td className="text-center" colSpan={3}>
                Tidak ada laporan
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

ReportList.propTypes = {
  reports: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  onCreate: PropTypes.func.isRequired,
  onDetail: PropTypes.func.isRequired,
};

export default ReportList;
