import Button from "../form/Button";
import { MdOutlineFileUpload } from "react-icons/md";
import { IconContext } from "react-icons";
import { useInput } from "../../hooks/useInput";
import Input from "../form/Input";

function ReportInput({
  title,
  type,
  place_report,
  date_report,
  description,
  evidence,
  is_anonim,
  isEdit,
}) {
  const [titleInput, onTitleInputChange] = useInput(title);
  const [typeInput, onTypeInputChange] = useInput(type);
  const [placeInput, onPlaceInputChange] = useInput(place_report);
  const [dateInput, onDateInputChange] = useInput(date_report);
  const [descriptionInput, onDescriptionInputChange] = useInput(description);
  //   const [evidenceInput, onEvidenceInputChange] = useInput(evidence);
  const [anonimInput, onAnonimInputChange] = useInput(is_anonim);

  return (
    <>
      <h5 className="mb-3">{isEdit ? "Ubah Laporan" : "Buat Laporan"}</h5>
      <div className="row gy-3 gx-4">
        <div className="col-md-4">
          <p className="mb-2">Jenis Kejadian</p>
          <div className="d-flex">
            <Input
              divClassName="form-check me-4"
              labelAndId="kekerasanSeksual"
              labelClassName=""
              type="radio"
              inputClassName="form-check-input"
              name="type"
              required
              value={0}
              onChangeHandler={onTypeInputChange}
            >
              Kekerasan Seksual
            </Input>
            <Input
              divClassName="form-check me-4"
              labelAndId="bullying"
              labelClassName="fst-italic"
              type="radio"
              inputClassName="form-check-input"
              name="type"
              value={1}
              onChangeHandler={onTypeInputChange}
            >
              Bullying
            </Input>
          </div>
        </div>
        <div className="col-8">
          <p className="mb-2">Kirim Secara Anonim*</p>
          <Input
            divClassName="form-check"
            labelAndId="anonim"
            labelClassName=""
            type="checkbox"
            inputClassName="form-check-input"
            value={anonimInput}
            onChangeHandler={onAnonimInputChange}
          >
            Anonim
          </Input>
        </div>
        <Input
          divClassName="col-md-4"
          labelAndId="judul"
          labelClassName=""
          type="text"
          value={titleInput}
          onChangeHandler={onTitleInputChange}
          required
        >
          Judul
        </Input>
        <Input
          divClassName="col-md-4"
          labelAndId="judul"
          labelClassName=""
          type="text"
          value={placeInput}
          onChangeHandler={onPlaceInputChange}
          required
        >
          Tempat Kejadian
        </Input>
        <Input
          divClassName="col-md-4"
          labelAndId="judul"
          labelClassName=""
          type="date"
          value={dateInput}
          onChangeHandler={onDateInputChange}
          required
        >
          Tanggal Kejadian
        </Input>
        <Input
          divClassName="col-12"
          labelAndId="deskripsi"
          labelClassName=""
          type="textarea"
          inputClassName="form-control deskripsi"
          value={description}
          onChangeHandler={onDescriptionInputChange}
          required
        >
          Deskripsi Kejadian
        </Input>
        <div className="col-12">
          <p className="mb-2">Bukti</p>
          <Button marginClass="d-flex align-items-center">
            <IconContext.Provider value={{ size: "25px" }}>
              <div>
                <MdOutlineFileUpload />
              </div>
            </IconContext.Provider>
            <p className="m-0 ms-2">Telusuri File</p>
          </Button>
        </div>
        <p className="text-primary">
          *Dosen atau pihak penanganan kampus tetap akan mengontak kamu via
          email atau nomor telepon yang tersedia pada akun untuk
          penindaklanjutan.
        </p>
        <div className="d-flex justify-content-center">
          <Button>Kirim Laporan</Button>
        </div>
      </div>
    </>
  );
}

export default ReportInput;
