import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import DashBoardPage from "../Assets/Json/Listdata.json";

function Periodic(props) {
  const allArr = useState(DashBoardPage);

  const goToDetails = (data) => {
    props.history.push("/details", {
      data: data,
    });
  };
  const firstTable = () => {
    let toRowLine = [];

    for (let i = 0; i < 7; i++) {
      let tdRowsItem = [];
      for (let j = 0; j < 18; j++) {
        let row = allArr[0][i][j].symbol;
        if (row) {
          if (["H", "N", "O", "C", "P", "S", "Se"].includes(row)) {
            tdRowsItem.push(
              <td
                className="lightGreen focus"
                onClick={() => goToDetails(allArr[0][i][j])}
              >
                <b>{row}</b>
                <sup>{allArr[0][i][j].atomicNumber}</sup>
                <br />
                {allArr[0][i][j].name}
              </td>
            );
          } else if (j === 0) {
            tdRowsItem.push(
              <td
                className="red focus"
                onClick={() => goToDetails(allArr[0][i][j])}
              >
                <b>{row}</b>
                <sup>{allArr[0][i][j].atomicNumber}</sup>
                <br />
                {allArr[0][i][j].name}
              </td>
            );
          } else if (j === 1 && i !== 0) {
            tdRowsItem.push(
              <td
                className="purple focus"
                onClick={() => goToDetails(allArr[0][i][j])}
              >
                <b>{row}</b>
                <sup>{allArr[0][i][j].atomicNumber}</sup>
                <br />
                {allArr[0][i][j].name}
              </td>
            );
          } else if (j === 16 && i !== 0) {
            tdRowsItem.push(
              <td
                className="yellow focus"
                onClick={() => goToDetails(allArr[0][i][j])}
              >
                <b>{row}</b>
                <sup>{allArr[0][i][j].atomicNumber}</sup>
                <br />
                {allArr[0][i][j].name}
              </td>
            );
          } else if (j === 17) {
            tdRowsItem.push(
              <td
                className="orange focus"
                onClick={() => goToDetails(allArr[0][i][j])}
              >
                <b>{row}</b>
                <sup>{allArr[0][i][j].atomicNumber}</sup>
                <br />
                {allArr[0][i][j].name}
              </td>
            );
          } else if (
            [
              "Al",
              "Ga",
              "In",
              "Sn",
              "Tl",
              "Pb",
              "Bi",
              "Nh",
              "Fl",
              "Mc",
              "Lv",
            ].includes(row)
          ) {
            tdRowsItem.push(
              <td
                className="tomato focus"
                onClick={() => goToDetails(allArr[0][i][j])}
              >
                <b>{row}</b>
                <sup>{allArr[0][i][j].atomicNumber}</sup>
                <br />
                {allArr[0][i][j].name}
              </td>
            );
          } else if (["B", "Si", "Ge", "As", "Sb", "Te", "Po"].includes(row)) {
            tdRowsItem.push(
              <td
                className="violet focus"
                onClick={() => goToDetails(allArr[0][i][j])}
              >
                <b>{row}</b>
                <sup>{allArr[0][i][j].atomicNumber}</sup>
                <br />
                {allArr[0][i][j].name}
              </td>
            );
          } else {
            tdRowsItem.push(
              <td
                className="indigo focus"
                onClick={() => goToDetails(allArr[0][i][j])}
              >
                <b>{row}</b>
                <sup>{allArr[0][i][j].atomicNumber}</sup>
                <br />
                {allArr[0][i][j].name}
              </td>
            );
          }
        } else {
          tdRowsItem.push(<td className="removeBorder">{row}</td>);
        }
      }
      toRowLine.push(<tr>{tdRowsItem}</tr>);
    }

    return toRowLine;
  };

  const secondTable = () => {
    let toRowLine = [];

    for (let i = 7; i < 9; i++) {
      let tdRowsItem = [];
      for (let j = 0; j < 15; j++) {
        let row = allArr[0][i][j].symbol;
        tdRowsItem.push(
          <td className="focus" onClick={() => goToDetails(allArr[0][i][j])}>
            <b>{row}</b>
            <sup>{allArr[0][i][j].atomicNumber}</sup>
            <br />
            {allArr[0][i][j].name}
          </td>
        );
      }
      toRowLine.push(<tr>{tdRowsItem}</tr>);
    }

    return toRowLine;
  };
  return (
    <div>
      <div className="flexBox paraCSS">
            <div className="Left"> Welcome all to Periodic table </div>
            <div className="Right"><b>Click on any element to get detail information..</b></div>
        </div>
      <table className="tableCenter styled-table">
        <tbody>
          <tr>{firstTable()}</tr>
        </tbody>
        <table className="tableBottom styled-table">
          <tbody>
            <tr>{secondTable()}</tr>
          </tbody>
        </table>
      </table>

      <p className="paraCSSEnd">
        &nbsp;
        <span>
          <small>
            &copy; Copyright {new Date().getFullYear()}, Khushboo Chaurasiya
          </small>
        </span>
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};

export default connect(mapStateToProps)(Periodic);
