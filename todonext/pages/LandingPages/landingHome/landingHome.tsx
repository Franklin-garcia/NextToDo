import React from "react";
import Container from "../../Containers/Container";
import InputToDo from "../../Components/Input/inputToDo";
import useLandingHome from "./state/uselandingHome";
const LandingHome = () => {
  const { data, onRemovetask } = useLandingHome();
  return (
    <Container>
      <div className="container-fluid d-flex justify-content-center m-5">
        <div className="w-50">
          <InputToDo />
        </div>
      </div>
      <div className="row justify-content-center">
        {data.map((item, index) => (
          <div key={index} className="card col-md-3 m-2">
            <div className="card-header">{item.level}</div>
            <div className="card-body">
              <h5 className="card-title">{item.todo}</h5>
              <p className="card-text">{`Card ${index + 1}`}</p>
              <a
                onClick={() => onRemovetask(item._id)}
                className="btn btn-danger m-1 "
              >
                End Task
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default LandingHome;
