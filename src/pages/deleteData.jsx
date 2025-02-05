import { deleteDataById } from "../services";
import "../styles/deleteData.css";

const DeleteData = ({ closeModal, seminarId }) => {
  const deleteData = () => {
    const deleleteSeminar = async () => {
      try {
        const response = await deleteDataById(seminarId);
        response && closeModal(false);
      } catch (error) {
        console.log(error);
      }
    };

    deleleteSeminar();
  };
  return (
    <>
      <div className="delete-container">
        <div className="delete-modal">
          <h1>Are you sure to delete?</h1>
          <div className="edit-buttons">
            <button
              type="submit"
              className="delete-data"
              onClick={() => deleteData()}
            >
              yes
            </button>

            <button className="no" onClick={() => closeModal(false)}>
              no
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteData;
