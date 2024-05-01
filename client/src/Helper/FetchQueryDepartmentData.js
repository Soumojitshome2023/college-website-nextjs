export const FetchQueryDepartmentData = (SearchDepartment) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('/data.json');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const res = await response.json();
            const data = res.DepartmentsData.find(department => department.Keyword == SearchDepartment);
            resolve({
                data: data,
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