import Button from "../components/form/Button";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
// Report Styling
import "../styles/report.css";
import DetailReport from "../components/reports/DetailReport";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { asyncReceiveReportDetail } from "../states/threadDetail/action";

function DetailReportPage() {
  const navigate = useNavigate();
  // const { reportId } = useParams();
  // const { reportDetail = null, authUser } = useSelector((states) => states);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(asyncReceiveReportDetail(reportId));
  // }, [reportId, dispatch]);

  const handleEditClick = () => {
    navigate("/reports/detail/update"); // Path ke halaman UpdateReport
  };

  return (
    <section className="bg-yellow-100 p-4 position-relative">
      <div className="row">
        <div className="col-md-auto mx-2 mb-4 mt-1">
          <img src="/icons/arrow-left-circle-fill.svg" alt="arrow-left" />
        </div>
        <div className="card p-3">
          <div className="col-md-13">
            <div className="d-flex justify-content-end align-items-center mb-1 gap-3">
              <Button
                marginClass="btn btn-secondary d-flex align-items-center"
                onClick={handleEditClick}
              >
                <IconContext.Provider value={{ size: "25px" }}>
                  <div>
                    <MdEdit />
                  </div>
                </IconContext.Provider>
                <p className="m-0 ms-2">Update</p>
              </Button>
              <Button marginClass="btn btn-danger d-flex align-items-center">
                <IconContext.Provider value={{ size: "25px" }}>
                  <div>
                    <MdDeleteForever />
                  </div>
                </IconContext.Provider>
                <p className="m-0 ms-2">Delete</p>
              </Button>
            </div>
            <div className="card-body">
              <DetailReport />
              {/* {...reportDetail}
              authUser = {authUser.id}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailReportPage;
