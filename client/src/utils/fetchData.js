import axios from 'axios';

export const getDataAPI = async (url,token) => {
    const res = await axios.get(`https://social-media-backend-8lppo7i9i-rajni3541.vercel.app/api/${url}`,{
        headers: { Authorization: token}
    });
    return res;
}

export const postDataAPI = async (url, post, token) => {
  const res = await axios.post(`https://social-media-backend-8lppo7i9i-rajni3541.vercel.app/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const putDataAPI = async (url, post, token) => {
  const res = await axios.put(`https://social-media-backend-8lppo7i9i-rajni3541.vercel.app/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const patchDataAPI = async (url, post, token) => {
  const res = await axios.patch(`https://social-media-backend-8lppo7i9i-rajni3541.vercel.app/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};


export const deleteDataAPI = async (url, token) => {
  const res = await axios.delete(`https://social-media-backend-8lppo7i9i-rajni3541.vercel.app/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};