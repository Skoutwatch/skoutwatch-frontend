import axios from "axios";

console.log(process.env.REACT_APP_BASE_URL);

export const getDataApi = async (url, token) => {
  const res = await axios.get(
    `
${process.env.REACT_APP_BASE_URL}/${url}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    }
  );
  return res;
};

export const postDataApi = async (url, post, token) => {
  const res = await axios.post(
    `
${process.env.REACT_APP_BASE_URL}/${url}`,
    post,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    }
  );
  return res;
};

export const logoutApi = async (url, token) => {
  const res = await axios.post(
    `
${process.env.REACT_APP_BASE_URL}/${url}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    }
  );
  return res;
};

export const putDataApi = async (url, post, token) => {
  const res = await axios.put(
    `
${process.env.REACT_APP_BASE_URL}/${url}`,
    post,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    }
  );
  return res;
};

export const patchDataApi = async (url, post, token) => {
  const res = await axios.patch(
    `
${process.env.REACT_APP_BASE_URL}/${url}`,
    post,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    }
  );
  return res;
};

export const deleteDataApi = async (url, token) => {
  const res = await axios.delete(
    `
${process.env.REACT_APP_BASE_URL}/${url}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    }
  );
  return res;
};
