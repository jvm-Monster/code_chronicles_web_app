import moment from "moment-timezone";

export const formatZoneDateTime = (dateString:string)=>{
    const date = moment(dateString);

    // Get the user's timezone
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Convert to user's timezone
    const userZonedDate = date.tz(userTimeZone);

    // Formatting the date
    return userZonedDate.format("yyyy-MM-DD HH:mm");
}