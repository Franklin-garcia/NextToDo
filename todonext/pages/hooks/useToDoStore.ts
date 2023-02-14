import { useAppSelector } from '../Redux/hooks/hook';
import { theListToDo } from  '../Redux/selectors/useCustomSelector';


export const useToDoSelector = () => {
    const dataToDo = useAppSelector(theListToDo);

    return {
      dataToDo,
    };
  };