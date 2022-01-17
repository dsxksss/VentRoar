import { Alert, Button, Snackbar } from "@mui/material";

// c1:要显示的内容c2:打开状态c3:设置打开状态的函数c4:样式c5:自动消失时间(毫秒)
const TextBar = (textMsg: any) => {
  const { msg, isOpen, FC, style, closeTime } = textMsg;
  const action = (
    <>
      <Button color="secondary" size="small" onClick={() => FC()}>
        关闭
      </Button>
    </>
  );
  return (
    <Snackbar
      open={isOpen}
      //显示位置vertical:垂直位置,horizontal:水平位置
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={closeTime} //多少秒后关闭
      onClose={() => FC()}
      sx={{ mt: 7 }}
      action={action} //其他额外内容
    >
      <Alert onClose={() => FC()} severity={style}>
        {msg}
      </Alert>
    </Snackbar>
  );
};
export default TextBar;
