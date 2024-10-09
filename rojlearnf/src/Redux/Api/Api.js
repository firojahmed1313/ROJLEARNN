import axios from "axios";

export const getApi = async (url,token) => {
    if (token==null) {
        const res = await axios.get(url, {
            withCredentials: true,
        })
        return res;
    }
    const res = await axios.get(url, {
        
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
    });
    return res;
}
export const postApi = async (url, data,token) => {
    if (token==null) {
        const res = await axios.post(url, data, {
            withCredentials: true,
        });
        return res;
    }
    const res = await axios.post(url, data, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
    });
    return res;
}

export const putApi = async (url, data,token) => {
    const res = await axios.put(url, data, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
    });
    return res;
}

export const deleteApi = async (url,token) => {
    const res = await axios.delete(url, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
    });
    return res;
}