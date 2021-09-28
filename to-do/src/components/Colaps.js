import React from "react";
import { Collapse } from "antd";

const Colaps = (props) => {
  const {tasks} = props;
  const { Panel } = Collapse;


  return (
    <div>
      {tasks.map( (element) => {
        return (<Collapse defaultActiveKey={["1"]} ghost>
          <Panel header="This is panel header 1" key={"1"}>
            <p>{element}</p>
            <button type="primary" danger>
              {" "}
              Delete{" "}
            </button>
          </Panel>
        </Collapse>
      )})}
    </div>
  );
};

export default Colaps;
