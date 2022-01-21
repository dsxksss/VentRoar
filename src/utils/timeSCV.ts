//1642650625
//时间戳转换
const timeSCV = (timeStamp: number) => {
  let time = new Date(timeStamp * 1000);
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let date = time.getDate();
  let hours = time.getHours();
  let minute = time.getMinutes();
if (month < 10) { month = '0' + month }
        if (date < 10) { date = '0' + date }
        if (hours < 10) { hours = '0' + hours }
        if (minute < 10) { minute = '0' + minute }
    
  return (
    year + "-" + month + "-" + date + " " + hours + ":" + minute 
  );
};
export default timeSCV;
