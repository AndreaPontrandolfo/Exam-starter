import React, { Component } from "react";
import { Table, Divider, Tag } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { compose } from "redux";

import { setCurrentVehicleType } from "../actions/actionCreator";

const columns = [
  {
    title: `Name`,
    dataIndex: `name`,
    key: `name`,
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: `Age`,
    dataIndex: `age`,
    key: `age`,
  },
  {
    title: `Address`,
    dataIndex: `address`,
    key: `address`,
  },
  {
    title: `Tags`,
    key: `tags`,
    dataIndex: `tags`,
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? `geekblue` : `green`;
          if (tag === `loser`) {
            color = `volcano`;
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: `Action`,
    key: `action`,
    render: (text, record) => (
      <span>
        <a href="javascript:;">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: `1`,
    name: `John Brown`,
    age: 32,
    address: `New York No. 1 Lake Park`,
    tags: [`nice`, `developer`,],
  },
  {
    key: `2`,
    name: `Jim Green`,
    age: 42,
    address: `London No. 1 Lake Park`,
    tags: [`loser`,],
  },
  {
    key: `3`,
    name: `Joe Black`,
    age: 32,
    address: `Sidney No. 1 Lake Park`,
    tags: [`cool`, `teacher`,],
  },
];

class SimpleTable extends Component {
  constructor(props) {
    super(props);
  }

  
/*   async componentDidMount() {
    try {
      const res = await axios.post(`api/todos`, {todos: `yee`,});
      console.log(res.data);
    } catch (err) {
      console.log(`Errore: ${err}`);
    }

} */

/* setVehicleTypeByRoute = async vehicle_type => {
  await this.props.setCurrentVehicleType({
    vehicle_type,
  });
  return await this.props.history.push(`/catalogo/${vehicle_type}`);
}; */

  render() {
    return <Table columns={columns} dataSource={data} />;
  }
}

/* function mapStateToProps(state) {
  return {
    vehicleType: state.setCurrentVehicleType.current_vehicleType,
  };
}

export default compose(
  connect(
    mapStateToProps,
    {
      setCurrentVehicleType,
    }
  )
)(SimpleTable); */

export default SimpleTable;