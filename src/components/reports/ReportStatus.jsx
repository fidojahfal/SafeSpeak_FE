import React from 'react';

function ReportStatus({ status }) {
  switch (status) {
    case 0:
      return (
        <p
          className="badge rounded-pill fs-6"
          style={{ color: '#984C0C', backgroundColor: '#FFC107' }}
        >
          Diterima
        </p>
      );
    case 1:
      return (
        <p className="badge rounded-pill text-bg-primary fs-6">Diproses</p>
      );
    case 2:
      return (
        <p
          className="badge rounded-pill fs-6"
          style={{ backgroundColor: '#90E0AB', color: '#198754' }}
        >
          Selesai
        </p>
      );
    case 3:
      return <p className="badge rounded-pill text-bg-danger fs-6">Ditolak</p>;
  }
}

export default ReportStatus;
