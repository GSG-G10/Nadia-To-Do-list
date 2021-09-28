import React from "react";
import { Input, Space } from 'antd';


const Todoform = (props) => {
  const { Search } = Input;

 const {setTasks} = props; 

  const onSearch = (value) => {
  setTasks(prevTasks => [...prevTasks, value])
}


  return (
    <div >
      <Space direction="vertical">
        <Search
          placeholder="Add to do"
          allowClear
          enterButton="Add"
          size="large"
          onSearch={onSearch}
          className="todo"
          
        />
      </Space>
      
     
    </div>
  );
};

export default Todoform;
