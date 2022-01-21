import { useEffect, useContext } from "react";
import { TextBarContext } from "../Components/TextBar";
const FindPswPage = () => {
  const { setTextBar } = useContext<any>(TextBarContext);
  useEffect(() => {
    setTextBar({
      isOpen: true,
      msg: "bad gay",
      MsgStyle: "textBar-style bg-green-400 text-white w-[40vw]",
    });
    setTimeout(() => {
      setTextBar((oldData: any) => ({
        ...oldData,
        isOpen: false,
      }));
    }, 3000);
  }, []);
  return (
    <>
      <div>FindPswPage</div>
    </>
  );
};
export default FindPswPage;
