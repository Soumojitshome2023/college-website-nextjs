import axios from "axios";
export const AdminSignUp = (name, username, email, contact, password, profileURL) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Fetch API
            const fetchlink = process.env.NEXT_PUBLIC_SERVERURL;
            const { data } = await axios.post(fetchlink + "/api/v1/admin/signup",
                {
                    "name": name,
                    "username": username,
                    "email": email,
                    "contact": contact,
                    "password": password,
                    "profileURL": profileURL
                },
                {
                    withCredentials: true
                }
            );
            resolve(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            reject(error.response.data);
        }
    })
}
