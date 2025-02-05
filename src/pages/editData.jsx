import { useState } from "react";
import "../styles/editData.css";
import { useEffect, useRef } from "react";
import { fetchDataById } from "../services";
import { updateDataById } from "../services";

const EditData = ({ closeModal, seminarId }) => {
  const fileInputRef = useRef(null);
  const [dataById, setDataById] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    photo: "",
  });

  useEffect(() => {
    const seminarById = async () => {
      try {
        const response = await fetchDataById(seminarId);
        const [year, month, day] = response.date.split(".");
        const formattedDate = `${day}-${month}-${year}`;
        setDataById({
          title: response.title,
          description: response.description,
          date: formattedDate,
          time: response.time,
          photo: response.photo,
        });
      } catch (error) {
        console.log(error);
      }
    };

    seminarById();
  }, [seminarId]);

  const submitData = () => {
    const updateSeminar = async () => {
      try {
        const response = await updateDataById(seminarId, dataById);
        response && closeModal(false);
      } catch (error) {
        console.log(error);
      }
    };
    updateSeminar();
  };

  // **** changing img
  const changeImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      // #### converts img to a Base64
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setDataById((prevValue) => ({
          ...prevValue,
          photo: reader.result,
        }));
      };
    }
  };

  const updateData = (e) => {
    const value = e.target.value;
    const name = e.target.id;
    setDataById((prevalue) => ({ ...prevalue, [name]: value }));
  };

  // **** to change img when img is clicked, it trigers input onchange => changeImg()
  const clickImg = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="edit-container">
        <div className="edit-data-modal">
          <div className="data-section">
            <div className="inputs">
              <input
                className="title"
                type="text"
                placeholder="title"
                value={dataById?.title}
                id="title"
                onChange={(e) => updateData(e)}
              />
              <div className="date-inputs">
                <input
                  className="date"
                  type="date"
                  value={dataById?.date}
                  id="date"
                  onChange={(e) => updateData(e)}
                />
                <input
                  className="time"
                  type="time"
                  placeholder="time"
                  value={dataById?.time}
                  id="time"
                  onChange={(e) => updateData(e)}
                />
              </div>

              <textarea
                className="description"
                placeholder="description"
                value={dataById?.description}
                id="description"
                onChange={(e) => updateData(e)}
              />
            </div>
            <div className="container">
              <input
                ref={fileInputRef}
                className="input"
                type="file"
                onChange={changeImg}
              />
              <img src={dataById.photo} onClick={clickImg} />
            </div>
          </div>
          <div className="edit-buttons">
            <button type="submit" className="edit" onClick={() => submitData()}>
              submit
            </button>

            <button className="cancel" onClick={() => closeModal(false)}>
              cansel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditData;
