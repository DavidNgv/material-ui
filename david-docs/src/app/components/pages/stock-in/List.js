/**
 * Created by davidngv on 12/8/16.
 */

import React from 'react';
import Title from 'react-title-component';

import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
    date: '20-11-2015',
    selected: true,
    comment: '',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
    date: '20-11-2015',
    comment: '',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
    selected: true,
    date: '20-11-2015',
    comment: '',
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
    date: '20-11-2015',
    comment: '',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
    date: '20-11-2015',
    comment: '',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
    date: '20-11-2015',
    comment: '',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
    date: '20-11-2015',
    comment: '',
  },
];

class ListStockIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '400px',
    };
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return (
      <div>
        <Title render={(previousTitle) => `Stock In List - ${previousTitle}`} />

        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            {/*
             <TableRow>
             <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
             Super Header
             </TableHeaderColumn>
             </TableRow>
             */}
            <TableRow>
              {/*<TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>*/}
              <TableHeaderColumn tooltip="The Name">Date</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Comment</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
                {/*<TableRowColumn>{index}</TableRowColumn>*/}
                <TableRowColumn>{row.date}</TableRowColumn>
                <TableRowColumn>{row.comment}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
          {/*
           <TableFooter
           adjustForCheckbox={this.state.showCheckboxes}
           >
           <TableRow>
           <TableRowColumn>ID</TableRowColumn>
           <TableRowColumn>Name</TableRowColumn>
           <TableRowColumn>Status</TableRowColumn>
           </TableRow>
           <TableRow>
           <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
           Super Footer
           </TableRowColumn>
           </TableRow>
           </TableFooter>
           */}
        </Table>

      </div>
    );
  }
}

export default ListStockIn;
