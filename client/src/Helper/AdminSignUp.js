export const AdminSignUp = (name, username, email, contact, password, profileURL) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Fetch API
            const fetchlink = process.env.NEXT_PUBLIC_SERVERURL;
            let result = await fetch(fetchlink + "/api/v1/admin/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "name": name,
                        "username": username,
                        "email": email,
                        "contact": contact,
                        "password": password,
                        "profileURL": profileURL
                    }
                ),
                withCredentials: true
            });

            const data = await result.json();
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
