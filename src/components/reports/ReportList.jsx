import React from 'react';
import ReportItem from './ReportItem';
import Button from '../form/Button';

function ReportList({ reports, user, onCreate }) {
  return (
    <div className="px-xl-5">
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
            reports.map((report) => <ReportItem key={1} {...report} />)
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

export default ReportList;
