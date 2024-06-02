import { IconContext } from "react-icons";
import Button from "../form/Button";
import Input from "../form/Input";
import { MdOutlineFileUpload } from "react-icons/md";

function ArticleInput({ isEdit, submitHandler }) {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <h5 className="mb-3">{isEdit ? "Ubah Laporan" : "Buat Artikel"}</h5>
      <div className="row gy-3 gx-4">
        <Input divClassName="col-12" labelAndId="judul" type="text" required>
          Judul
        </Input>
        <Input
          divClassName="col-12"
          labelAndId="deskripsi"
          type="textarea"
          inputClassName="form-control deskripsi"
          required
        >
          Konten Artikel
        </Input>
        <div className="col-12">
          <p className="mb-2 form-blue-label-semibold">Lampiran Gambar</p>
          <Button marginClass="d-flex align-items-center">
            <IconContext.Provider value={{ size: "25px" }}>
              <div>
                <MdOutlineFileUpload />
              </div>
            </IconContext.Provider>
            <p className="m-0 ms-2">Telusuri File</p>
          </Button>
        </div>
        <div className="d-flex justify-content-center">
          <Button type="submit">Kirim Laporan</Button>
        </div>
      </div>
    </form>
  );
}

export default ArticleInput;
