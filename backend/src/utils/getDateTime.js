import moment from "moment-timezone";

const getDateTime = () => moment.tz("Asia/Yerevan").toDate();

export default getDateTime;
