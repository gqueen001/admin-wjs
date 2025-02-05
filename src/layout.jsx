import { useEffect, useState } from "react";
import { fetchSeminars } from "./services";
import EditData from "./pages/editData";
import DeleteData from "./pages/deleteData";
import "./styles/layout.css";

const Layout = () => {
  const [data, setData] = useState([]);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [id, setId] = useState();

  useEffect(() => {
    const seminars = async () => {
      try {
        const response = await fetchSeminars();
        setData(
          response?.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            date: item.date,
            time: item.time,
            photo: item.photo,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };

    seminars();
  }, [isOpenEditModal, isOpenDeleteModal]);

  // **** when clicks edit button the function opens modal and prop clicked id
  const editData = (sid) => {
    setId(sid);
    setIsOpenEditModal(true);
  };

  // **** when clicks delete button the function opens modal and gets clicked id
  const deleteData = (sid) => {
    setId(sid);
    setIsOpenDeleteModal(true);
  };

  const dataOfTable = data?.map((dt, index) => {
    return (
      <tr className="rows" key={index}>
        <td>{dt.id}</td>
        <td>{dt.title}</td>
        <td className="buttons">
          <button className="edit-btn" onClick={() => editData(dt.id)}>
            ✍️
          </button>
          <button className="delete-btn" onClick={() => deleteData(dt.id)}>
            🗑
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <table className="table">
        <thead>
          <tr className="rows">
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{dataOfTable}</tbody>
      </table>

      {isOpenEditModal && (
        <EditData closeModal={setIsOpenEditModal} seminarId={id} />
      )}
      {isOpenDeleteModal && (
        <DeleteData closeModal={setIsOpenDeleteModal} seminarId={id} />
      )}
    </>
  );
};

export default Layout;
