function generateFilterQueryString(filters) {
    const burl = import.meta.env.VITE_URL;
    let queryString = "/?";

    // Iterate through the filters object
    for (const [key, value] of Object.entries(filters)) {
        if (value !== undefined && value !== null && value !== "") {
            // Special handling for `sortBy`
            if (key === "sortBy" && typeof value === "object") {
                const { field, order } = value; // Extract field and order
                queryString += `sortBy=${encodeURIComponent(field)}&order=${encodeURIComponent(order)}&`;
            } else {
                // Add other filters
                queryString += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
            }
        }
    }
    //window.location.href = `https://5173-firojahmed131-rojlearnn-yx462bjcym9.ws-us116.gitpod.io/courses${queryString.slice(0, -1)}`
    // Remove the trailing '&' and return
    return queryString.slice(0, -1);
    
}

export default generateFilterQueryString
