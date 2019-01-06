import React, { Component } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import {IoIosTrash} from 'react-icons/io';

class Table extends Component {
    render() {
        const {decisions, removeDecision} = this.props;
        return (
            <TBody
                decisions = {decisions}
                removeDecision = {removeDecision}
            />
        )
    }

}

const TBody = props => {
    const rows = props.decisions.map((row, index) => {
        return (
            <TableRow key={index}>
                <TableCell>决策{index + 1}</TableCell>
                <TableCell>{row.decision}</TableCell>
                <TableCell> <Button color="default" onClick={() => {props.removeDecision(index)}}><IoIosTrash/></Button></TableCell>
            </TableRow>
        );
    });
    return <TableBody>{rows}</TableBody>;
};

export default Table;


