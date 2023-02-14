import { useState } from "react";
import { useAppDispatch } from "../../../Redux/hooks/hook";
import { addOneToDo } from "../../../Redux/actions/toDo.Action";
import { useToDoSelector } from "../../../hooks/useToDoStore";

export const useInputForm = () => {
  const [inputForm, setInputForm] = useState({
    level: "hight",
    todo: "",
  });
  const { level, todo } = inputForm;
  const datalenght = useToDoSelector().dataToDo.myListToDo;
  const setInput = (e: any) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const dispatch = useAppDispatch();

  const onSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      _id: datalenght.length + 1,
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
