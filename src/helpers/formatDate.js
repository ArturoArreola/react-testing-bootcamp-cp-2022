export const formatDate = (picDate) => {
    const convertedStartDate = new Date(picDate);
    const month = convertedStartDate.getMonth() + 1;
    const day = convertedStartDate.getDate();
    const year = convertedStartDate.getFullYear();
    return year + "-" + month + "-" + day;
}
