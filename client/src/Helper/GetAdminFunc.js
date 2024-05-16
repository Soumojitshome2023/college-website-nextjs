import axios from "axios";
export const GetAdminFunc = () => {
    return new Promise(async (resolve, reject) => {
        try {
            // Fetch API
            const fetchlink = process.env.NEXT_PUBLIC_SERVERURL;
            const { data } = await axios.get(fetchlink + "/api/v1/admin/getadmin",
                {
                    withCredentials: true
                }
            )
            resolve(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            reject(error?.response?.data);
        }
    })
}
