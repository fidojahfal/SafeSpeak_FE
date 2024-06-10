import React from 'react';
import PropTypes from 'prop-types';
import Button from '../form/Button';
import { MdOutlineFileUpload } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useInput } from '../../hooks/useInput';
import Input from '../form/Input';
import moment from 'moment';

function ReportInput({
  title,
  type,
  place_report,
  date_report,
  description,
  evidence,
  is_anonim,
  isEdit,
  submitHandler,
}) {
  const [titleInput, onTitleInputChange] = useInput(title);
  const [typeInput, onTypeInputChange] = useInput(
    type !== undefined ? type.toString() : ''
  );
  const [placeInput, onPlaceInputChange] = useInput(place_report);
  const [dateInput, onDateInputChange] = useInput(date_report);
  const [descriptionInput, onDescriptionInputChange] = useInput(description);
  const [anonimInput, onAnonimInputChange] = useInput(is_anonim ? 1 : 0);
  const [evidenceInput, onEvidenceInputChange] = useInput(evidence);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log({
      title: titleInput,
      type: Number(typeInput),
      place_report: placeInput,
      date_report: dateInput,
      description: descriptionInput,
      evidence: evidenceInput,
      is_anonim: anonimInput,
    });
    submitHandler({
      title: titleInput,
      type: Number(typeInput),
      place_report: placeInput,
      date_report: dateInput,
      description: descriptionInput,
      evidence: evidenceInput,
      is_anonim: anonimInput,
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h5 className="mb-3">{isEdit ? 'Ubah Laporan' : 'Buat Laporan'}</h5>
      <div className="row gy-3 gx-4">
        <div className="col-md-4">
          <p className="mb-2 form-blue-label-semibold">Jenis Kejadian</p>
          <div className="d-flex">
            <Input
              divClassName="form-check me-4"
              labelAndId="kekerasanSeksual"
              labelClassName=""
              type="radio"
              inputClassName="form-check-input"
              name="type"
              required
              value="0"
              checked={typeInput === '0'}
              onChangeHandler={onTypeInputChange}
            >
              Kekerasan Seksual
            </Input>
            <Input
              divClassName="form-check"
              labelAndId="bullying"
              labelClassName="fst-italic"
              type="radio"
              inputClassName="form-check-input"
              name="type"
              value="1"
              checked={typeInput === '1'}
              onChangeHandler={onTypeInputChange}
            >
              Bullying
            </Input>
          </div>
        </div>
        <div className="col-md-8">
          <p className="mb-2 form-blue-label-semibold">Kirim Secara Anonim*</p>
          <Input
            divClassName="form-check"
            labelAndId="anonim"
            labelClassName=""
            type="checkbox"
            inputClassName="form-check-input"
            checked={anonimInput === 1}
            onChangeHandler={onAnonimInputChange}
          >
            Anonim
          </Input>
        </div>
        <Input
          divClassName="col-md-4"
          labelAndId="judul"
          type="text"
          value={titleInput}
          onChangeHandler={onTitleInputChange}
          required
        >
          Judul
        </Input>
        <Input
          divClassName="col-md-4"
          labelAndId="place_report"
          type="text"
          value={placeInput}
          onChangeHandler={onPlaceInputChange}
          required
        >
          Tempat Kejadian
        </Input>
        <Input
          divClassName="col-md-4"
          labelAndId="date_report"
          type="date"
          value={dateInput}
          onChangeHandler={onDateInputChange}
          max={moment(new Date()).format('YYYY-MM-DD')}
          required
        >
          Tanggal Kejadian
        </Input>
        <Input
          divClassName="col-12"
          labelAndId="deskripsi"
          type="textarea"
          inputClassName="form-control deskripsi"
          value={descriptionInput}
          onChangeHandler={onDescriptionInputChange}
          required
        >
          Deskripsi Kejadian
        </Input>
        <div className="col-12">
          {isEdit && (
            <div className="mb-2">
              <p className="mb-2 form-blue-label-semibold inline">
                Bukti Sebelumnya
              </p>
              <a href={evidence}>{evidence}</a>
            </div>
          )}
          <p className="mb-2 form-blue-label-semibold">Bukti PDF</p>
          <Input
            type="file"
            labelAndId="image"
            labelClassName="custom-file-button"
            inputClassName=""
            onChangeHandler={onEvidenceInputChange}
            required={!isEdit}
            accept=".pdf"
          ></Input>
        </div>
        <p className="text-primary">
          *Dosen atau pihak penanganan kampus tetap akan mengontak kamu via
          email atau nomor telepon yang tersedia pada akun untuk
          penindaklanjutan.
        </p>
        <div className="d-flex justify-content-center">
          <Button type="submit">Kirim Laporan</Button>
        </div>
      </div>
    </form>
  );
}

ReportInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  place_report: PropTypes.string,
  date_report: PropTypes.string,
  description: PropTypes.string,
  evidence: PropTypes.string,
  is_anonim: PropTypes.bool,
  isEdit: PropTypes.bool,
};

export default ReportInput;
