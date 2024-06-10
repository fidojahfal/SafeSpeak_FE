import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { BsPersonWorkspace } from 'react-icons/bs';
import { BiLike, BiDislike } from 'react-icons/bi';
import PropTypes from 'prop-types';
import '../../styles/status.css';

const StatusReport = ({ status }) => {
  const renderStatusContent = (currentStatus) => {
    switch (currentStatus) {
      case 0:
        return {
          icon: <FaCheckCircle size={30} />,
          text: 'Diterima',
          info: ['Laporan kamu sudah masuk ke dalam sistem.'],
          color: 'primary',
        };
      case 1:
        return {
          icon: <BsPersonWorkspace size={30} />,
          text: 'Ditindaklanjuti',
          info: [
            'Dosen akan mereview laporan dan mengontak anda via email/nomor telepon untuk penindaklanjutan.',
          ],
          color: 'primary',
        };
      case 2:
        return {
          icon: <BiLike size={30} />,
          text: 'Selesai',
          info: [
            'Laporan ditandakan selesai. Jika anda merasa ini adalah kesalahan, silahkan kontak safespeak@gmail.',
          ],
          color: 'success',
        };
      case 3:
        return {
          icon: <BiDislike size={30} />,
          text: 'Ditolak',
          info: [
            'Lihat alasan penolakan dibawah. Jika anda merasa ini adalah kesalahan, silahkan kontak safespeak@gmail.',
          ],
          color: 'danger',
        };
      default:
        return {
          icon: null,
          text: '',
          info: [''],
          color: '',
        };
    }
  };

  const statusContent = renderStatusContent(status);

  return (
    <div>
      <h5 className="mb-3">Progress Laporan</h5>
      <div className="stepper">
        <div className="steps-container">
          <div className="steps">
            {[0, 1, 2].map((step) => (
              <React.Fragment key={step}>
                <div
                  className={`step me-1 ms-2 ${
                    status >= step
                      ? step === 2 && status === 3
                        ? 'danger'
                        : step === 2 && status === 2
                        ? 'success'
                        : 'active'
                      : ''
                  }`}
                  id={step}
                >
                  <div
                    className={`icon ${
                      status >= step
                        ? step === 2 && status === 3
                          ? 'danger'
                          : step === 2 && status === 2
                          ? 'success'
                          : 'active'
                        : ''
                    }`}
                  >
                    {
                      renderStatusContent(
                        step === 2 && (status === 3 || status === 2)
                          ? status
                          : step
                      ).icon
                    }
                  </div>
                  <div className="step-title">
                    <div
                      className={`step-text me-2 ms-2 ${
                        status >= step
                          ? step === 2 && status === 3
                            ? 'text-danger'
                            : step === 2 && status === 2
                            ? 'text-success'
                            : ''
                          : ''
                      }`}
                    >
                      {
                        renderStatusContent(
                          step === 2 && (status === 3 || status === 2)
                            ? status
                            : step
                        ).text
                      }
                    </div>
                    {status === step ||
                    (step === 2 && (status === 3 || status === 2)) ? (
                      <div className="step-info mt-2">
                        {
                          renderStatusContent(
                            step === 2 && (status === 3 || status === 2)
                              ? status
                              : step
                          ).info
                        }
                      </div>
                    ) : null}
                  </div>
                </div>
                {step < 2 && (
                  <div
                    className={`step-bar me-1 ms-1 ${
                      status >= step + 1 ? 'active' : ''
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

StatusReport.propTypes = {
  status: PropTypes.number.isRequired,
};

export default StatusReport;
