import axios from "axios";
export const CreateEvent = (title, details, posterURL) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Fetch API
            const fetchlink = process.env.NEXT_PUBLIC_SERVERURL;
            const { data } = await axios.post(fetchlink + "/api/v1/event/upload",
                {
                    title,
                    details,
                    posterURL
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
