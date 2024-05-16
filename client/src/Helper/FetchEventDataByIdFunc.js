const FetchEventDataByIdFunc = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_SERVERURL + '/api/v1/event/' + id);

            const data = await response.json();
            resolve({
                data: data.event,
                success: true
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            reject({
                message: error.message,
                success: false
            });
        }
    })
}

export default FetchEventDataByIdFunc;