import axios from "axios";

export async function fetchSeminars() {
  const { data } = await axios.get("http://127.0.0.1:3000/seminars");
  return data;
}

export async function fetchDataById(id) {
  const { data } = await axios.get(`http://127.0.0.1:3000/seminars/${id}`);
  return data;
}

export async function updateDataById(id, dataById) {
  const [year, month, day] = dataById.date.split("-");
  const formattedDate = `${day}.${month}.${year}`;
  const { data } = await axios.put(`http://127.0.0.1:3000/seminars/${id}`, {
    title: dataById.title,
    description: dataById.description,
    date: formattedDate,
    time: dataById.time,
    photo: `${dataById.photo}`,
  });
  return data;
}

export async function deleteDataById(id) {
  const { data } = await axios.delete(`http://127.0.0.1:3000/seminars/${id}`);
  return data;
}
