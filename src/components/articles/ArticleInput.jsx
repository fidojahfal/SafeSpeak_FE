import { IconContext } from "react-icons";
import Button from "../form/Button";
import Input from "../form/Input";
import { MdOutlineFileUpload } from "react-icons/md";
import { useInput } from "../../hooks/useInput";
import { uploadImage } from "../../utils/api";

function ArticleInput({ title, content, image, isEdit, submitHandler }) {
  const [titleInput, onTitleInputChange] = useInput(title);
  const [contentInput, onContentInputChange] = useInput(content);
  const [imageInput, onImageInputChange] = useInput(image);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(imageInput);
    const imageUrl = await uploadImage(imageInput);
    submitHandler({
      title: titleInput,
      content: contentInput,
      image: imageUrl,
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
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
          <Input
            type="file"
            labelAndId="image"
            labelClassName="custom-file-button"
            inputClassName=""
            onChangeHandler={onImageInputChange}
            required
          ></Input>
        </div>
        <div className="d-flex justify-content-center">
          <Button type="submit">Buat Laporan</Button>
        </div>
      </div>
    </form>
  );
}

export default ArticleInput;
