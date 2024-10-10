
export const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // Extracting date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
    const day = String(date.getDate()).padStart(2, '0');

    // Extracting time components
    let hour = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // AM/PM and 12-hour format conversion
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12; // Convert to 12-hour format and handle "0" as "12"

    // Create the object to return
    return {
        year: year,
        month: monthNames[month-1],
        day: day,
        hour: hour,
        minutes: minutes,
        seconds: seconds,
        period: ampm
    };
}

