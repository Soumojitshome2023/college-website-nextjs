import axios from "axios";
export const CreateEvent = (formData) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Fetch API
            const fetchlink = process.env.NEXT_PUBLIC_SERVERURL;
            const { data } = await axios.post(fetchlink + "/api/v1/event/upload",
                formData,
                {
                    headers : {
                        "Content-Type" : 'multipart/form-data'
                    }
                },
                {
                    withCredentials: true
                }
            );
            resolve(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            reject(error?.response.data);
        }
    })
}
