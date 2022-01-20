//1642650625
//时间戳转换
const timeSCV = (timeStamp: number) => {
  let time = new Date(timeStamp * 1000);
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let date = time.getDate();
  let hours = time.getHours();
  let minute = time.getMinutes();

  return (
    year + "-" + month + "-" + date + " " + hours + ":" + minute 
  );
};
export default timeSCV;
