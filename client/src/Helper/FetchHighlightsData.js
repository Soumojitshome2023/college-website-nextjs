const FetchHighlightsData = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('/data.json');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            resolve({
                data: data.HighlightsData,
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

export default FetchHighlightsData;