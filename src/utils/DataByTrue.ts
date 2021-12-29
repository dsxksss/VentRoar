/*
---此复用算法是用来判断这串数据里是否含有这两个值(一般用于登入界面)
*/  
 export const DataByTrue = (arr: any, name: string, password: string) => {
    const data = [...arr]; //SM:克隆数据避免操作原数据
    if (
      data.find((m) => m.userName === name && m.userPassword === password) !==
      undefined
    ) {
      console.log("登入成功");
    } else {
      console.log("登入失败");
    }
  };