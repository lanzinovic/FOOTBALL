import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="prediction">
      <h2 className="head">FREE EXPERT PREDICTIONS</h2>
      <hr />
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>TIME</th>
              <th>FIXTURES</th>
              <th>TIP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>18:30</td>
              <td>Ferrol Vs Mirandes</td>
              <td>1x</td>
            </tr>
            <tr>
              <td>19:00</td>
              <td>Barcelona Vs Valencia</td>
              <td>1</td>
            </tr>
            <tr>
              <td>16:30</td>
              <td>Hapoel Haifa Vs Maccabi Haifa</td>
              <td>2</td>
            </tr>
            <tr>
              <td>13:00</td>
              <td>NSI Runavik Vs Vikingur</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
