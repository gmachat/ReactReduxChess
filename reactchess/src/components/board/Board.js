import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Square from './square/Square';

const Board = props => {
  return (
    <Fragment>
      <table className="gameboard">
        <tbody>
          <tr>
            <td className="board-square border-Square"></td>
            <td className="board-square border-Square">1</td>
            <td className="board-square border-Square">2</td>
            <td className="board-square border-Square">3</td>
            <td className="board-square border-Square">4</td>
            <td className="board-square border-Square">5</td>
            <td className="board-square border-Square">6</td>
            <td className="board-square border-Square">7</td>
            <td className="board-square border-Square">8</td>
          </tr>
          <tr>
            <td className="board-square border-Square">A</td>
            <Square
              initialColor="white"
              selected={false}
              row={0}
              column={0}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={0}
              column={1}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={0}
              column={2}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={0}
              column={3}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={0}
              column={4}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={0}
              column={5}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={0}
              column={6}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={0}
              column={7}
            ></Square>
          </tr>
          <tr>
            <td className="board-square border-Square">B</td>
            <Square
              initialColor="black"
              selected={false}
              row={1}
              column={0}
            ></Square>
            <Square initialColor="white" selected={false} row={1} column={1}>
              >
            </Square>
            <Square initialColor="black" selected={false} row={1} column={2}>
              >
            </Square>
            <Square initialColor="white" selected={false} row={1} column={3}>
              >
            </Square>
            <Square initialColor="black" selected={false} row={1} column={4}>
              >
            </Square>
            <Square initialColor="white" selected={false} row={1} column={5}>
              >
            </Square>
            <Square initialColor="black" selected={false} row={1} column={6}>
              >
            </Square>
            <Square initialColor="white" selected={false} row={1} column={7}>
              >
            </Square>
          </tr>
          <tr>
            <td className="board-square border-Square">C</td>
            <Square initialColor="white" selected={false} row={2} column={0}>
              >
            </Square>
            <Square
              initialColor="black"
              selected={false}
              row={2}
              column={1}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={2}
              column={2}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={2}
              column={3}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={2}
              column={4}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={2}
              column={5}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={2}
              column={6}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={2}
              column={7}
            ></Square>
          </tr>
          <tr>
            <td className="board-square border-Square">D</td>
            <Square
              initialColor="black"
              selected={false}
              row={3}
              column={0}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={3}
              column={1}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={3}
              column={2}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={3}
              column={3}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={3}
              column={4}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={3}
              column={5}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={3}
              column={6}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={3}
              column={7}
            ></Square>
          </tr>
          <tr>
            <td className="board-square border-Square">E</td>
            <Square
              initialColor="white"
              selected={false}
              row={4}
              column={0}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={4}
              column={1}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={4}
              column={2}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={4}
              column={3}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={4}
              column={4}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={4}
              column={5}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={4}
              column={6}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={4}
              column={7}
            ></Square>
          </tr>
          <tr>
            <td className="board-square border-Square">F</td>
            <Square
              initialColor="black"
              selected={false}
              row={5}
              column={0}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={5}
              column={1}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={5}
              column={2}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={5}
              column={3}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={5}
              column={4}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={5}
              column={5}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={5}
              column={6}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={5}
              column={7}
            ></Square>
          </tr>
          <tr>
            <td className="board-square border-Square">G</td>
            <Square
              initialColor="white"
              selected={false}
              row={6}
              column={0}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={6}
              column={1}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={6}
              column={2}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={6}
              column={3}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={6}
              column={4}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={6}
              column={5}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={6}
              column={6}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={6}
              column={7}
            ></Square>
          </tr>
          <tr>
            <td className="board-square border-Square">H</td>
            <Square
              initialColor="black"
              selected={false}
              row={7}
              column={0}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={7}
              column={1}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={7}
              column={2}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={7}
              column={3}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={7}
              column={4}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={7}
              column={5}
            ></Square>
            <Square
              initialColor="black"
              selected={false}
              row={7}
              column={6}
            ></Square>
            <Square
              initialColor="white"
              selected={false}
              row={7}
              column={7}
            ></Square>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

Board.propTypes = {
  board: PropTypes.array,
  selectedSquare: PropTypes.array
};

const mapStateToProps = state => ({
  board: state.board,
  selectedSquare: state.selectedSquare
});

export default connect(mapStateToProps, null)(Board);
