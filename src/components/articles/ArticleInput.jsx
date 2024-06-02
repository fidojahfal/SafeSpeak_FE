import { IconContext } from "react-icons";
import Button from "../form/Button";
import Input from "../form/Input";
import { MdOutlineFileUpload } from "react-icons/md";
import { useInput } from "../../hooks/useInput";

function ArticleInput({ title, content, image, isEdit, submitHandler }) {
  const [titleInput, onTitleInputChange] = useInput(title);
  const [contentInput, onContentInputChange] = useInput(content);
  const [imageInput, onImageInputChange] = useInput(image);

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", imageInput);
    formData.append("upload_preset", "alxssoyv");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dcgp7jyh2/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    console.log(response);
  };

  const onSubmitMock = async (event) => {
    event.preventDefault();
    await uploadImage();
    console.log({
      title: titleInput,
      content: contentInput,
      image: "temporary",
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    submitHandler({
      title: titleInput,
      content: contentInput,
      image: "temporary",
    });
  };

  return (
    <form onSubmit={onSubmitMock}>
      <h5 className="mb-3">{isEdit ? "Ubah Artikel" : "Buat Artikel"}</h5>
      <div className="row gy-3 gx-4">
        <Input
          divClassName="col-12"
          labelAndId="judul"
          type="text"
          value={titleInput}
          onChangeHandler={onTitleInputChange}
          required
        >
          Judul
        </Input>
        <Input
          divClassName="col-12"
          labelAndId="deskripsi"
          type="textarea"
          inputClassName="form-control deskripsi"
          value={contentInput}
          onChangeHandler={onContentInputChange}
          required
        >
          Konten Artikel
        </Input>
        <div className="col-12">
          <p className="mb-2 form-blue-label-semibold">Lampiran Gambar</p>
          {/* <Button marginClass="d-flex align-items-center">
            <IconContext.Provider value={{ size: "25px" }}>
              <div>
                <MdOutlineFileUpload />
              </div>
            </IconContext.Provider>
            <p className="m-0 ms-2">Telusuri File</p>
          </Button> */}
          <input type="file" onChange={onImageInputChange} />
        </div>
        <div className="d-flex justify-content-center">
          <Button type="submit">Buat Laporan</Button>
        </div>
      </div>
    </form>
  );
}

export default ArticleInput;
