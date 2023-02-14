import { useToDoSelector } from "../../../hooks/useToDoStore";
import { useAppDispatch } from "../../../Redux/hooks/hook";
import { deleteToDo } from "../../../Redux/actions/toDo.Action";

export const useLandingHome = () => {
  const data = useToDoSelector().dataToDo.myListToDo;
  const dispatch = useAppDispatch();
  const onRemovetask = (_id: number) => {
    dispatch(deleteToDo(_id));
  };

  return {
    data,
    onRemovetask,
  };
};

export default useLandingHome;
