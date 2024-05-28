import ReportInput from "../components/reports/ReportInput";

// Report Styling
import "../styles/report.css";

function CreateReportPage() {
  return (
    <section className="bg-yellow-100 p-4">
      <div className="row">
        <div className="col-md-auto mx-2 mb-4 mt-1">
          <img src="/icons/arrow-left-circle-fill.svg" alt="arrow-left" />
        </div>
        <div className="col-md-11">
          <div className="card p-3">
            <div className="card-body">
              <ReportInput />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateReportPage;
