import React, { Component } from "react";
import EmployeeService from "../EmployeeService";
import MMText from "react-mm-text";
import knayi from "knayi-myscript";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  editEmployee(id) {
    this.props.history.push(`/add-employee/${id}`);
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employee: res.data });
    });
  }

  addEmployee() {
    this.props.history.push("/add-employee/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">EmployeeList</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered font-change">
            <thead>
              <tr>
                <th>
                  {/* <MMText
            text={"နာမည္အစ"}
            showFont={"zawgyi"}
          /> */}
                  {/* နာမည္ႀကီးေသာသူကို ေျဖပါ */}
                  {/* <knayi
          content={"မဂၤလာပါ"}
          targetFontType={"unicode"}
          orignalFontType={"zawgyi"}
          /> */}
                  အမည်အစ
                </th>
                <th>
                  အမည်အဆုံး
                  {/* <MMText
            text={"အမည်အဆုံး"}
            showFont={"zawgyi"}
          /> */}
                </th>
                <th>မေးလ်လိပ်စာ</th>
                <th>လုပ်ဆောင်ချက်</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employee.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button
                      onClick={() => this.editEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteEmployee(employee.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
