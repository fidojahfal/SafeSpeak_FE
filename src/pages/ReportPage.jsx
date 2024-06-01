import React from 'react';
import ReportList from '../components/reports/ReportList';
import '../styles/report.css';
import { useNavigate } from 'react-router-dom';

function ReportPage() {
  const navigate = useNavigate();

  function onCreateReportHandler() {
    navigate('/reports/create');
  }
  return (
    <section className="bg-yellow-100-report p-4 position-relative">
      <div className="card">
        <div className="card-body report-card">
          <ReportList onCreate={onCreateReportHandler} reports={[]} user={{}} />
        </div>
      </div>
    </section>
  );
}
export default ReportPage;
