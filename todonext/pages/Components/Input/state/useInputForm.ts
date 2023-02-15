import { useState } from "react";
import { useAppDispatch } from "../../../Redux/hooks/hook";
import { addOneToDo } from "../../../Redux/actions/toDo.Action";

export const useInputForm = () => {
  const [inputForm, setInputForm] = useState({
    level: "hight",
    todo: "",
  });
  const { level, todo } = inputForm;
  const setInput = (e: any) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const dispatch = useAppDispatch();

  const getRandomId = () => {
    return Math.floor(Math.random() * 2000);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      _id: getRandomId(),
      level,
      todo,
    };
    dispatch(addOneToDo(data));
  };

  return {
    level,
    todo,
    setInput,
    onSubmit,
  };
};

export default useInputForm;
