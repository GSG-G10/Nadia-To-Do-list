import React from "react";
import { Collapse } from "antd";

const Colaps = (props) => {
  const { tasks, setTasks } = props;
  const { Panel } = Collapse;
//   function delete (e) {
        
//   }

  return (
    <div>
      {tasks.map (function (element,i) {
        <Collapse defaultActiveKey={["1"]} ghost>
          <Panel header="This is panel header 1" key={"1"}>
            <p>{element}</p>
            <button type="primary" danger>
              {" "}
              Delete{" "}
            </button>
          </Panel>
        </Collapse>
      })}
    </div>
  );
};

export default Colaps;
