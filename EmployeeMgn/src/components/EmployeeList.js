import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    // asyn call -- request to the firebase
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps ARE THE NEXT SET OF props
    // that this component will be
    // rendered with
    // this.props is still the old set of prpos

    this.createDataSource(nextProps);
  }

  createDataSource({ employess }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employess);
  }


  render() {
    return (
      <View>
        <Text> Mushi </Text>
        <Text> Mushi </Text>
        <Text> Mushi </Text>
        <Text> Mushi </Text>
        <Text> Mushi </Text>
      </View>
    );
  }
}

export default connect(null, { employeesFetch })(EmployeeList);
