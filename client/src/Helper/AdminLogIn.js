import axios from "axios";
export const AdminLogIn = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Fetch API
            const fetchlink = process.env.NEXT_PUBLIC_SERVERURL;
            // let result = await fetch(fetchlink + "/api/v1/admin/login", {
            //     method: "POST",
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(
            //         {
            //             "email": email,
            //             "password": password,
            //         }
            //     ),
            //     withCredentials: true
            // });
            const { data } = await axios.post(fetchlink+"/api/v1/admin/login",{email,password},{
                withCredentials : true
            })
            // const data = await result.json();
            resolve(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            reject({
                message: error.message,
                success: false
            });
        }
    })
}
