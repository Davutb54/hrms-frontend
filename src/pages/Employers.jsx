import React from "react";
import { useState, useEffect } from "react";
import EmployerService from "../services/employerService";
import { Icon, Table, Button } from "semantic-ui-react";

export default function Employers() {
  const [employers, setemployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setemployers(result.data.data));
  }, []);

  return (
    <div>
      <Table inverted style={{ marginBottom: "0" }}>
        <Table.Header>
          <Table.HeaderCell style={{ textAlign: "center" }}>
            Companies
            <Icon name="factory" style={{ marginLeft: "0.3em" }} />
          </Table.HeaderCell>
        </Table.Header>
      </Table>

      <Table celled inverted style={{ marginTop: "0" }}>
        <Table.Header>
          <Table.HeaderCell>
            Company
            <Icon name="factory" style={{ marginLeft: "0.3em" }} />
          </Table.HeaderCell>
          <Table.HeaderCell>
            Web Site
            <Icon name="world" style={{ marginLeft: "0.3em" }} />
          </Table.HeaderCell>
          <Table.HeaderCell>
            E-Mail
            <Icon name="mail" style={{ marginLeft: "0.3em" }} />
          </Table.HeaderCell>
          <Table.HeaderCell>
            Telephone
            <Icon name="phone" style={{ marginLeft: "0.3em" }} />
          </Table.HeaderCell>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => (
            <Table.Row key={employer.id}>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.website}</Table.Cell>
              <Table.Cell>{employer.email}</Table.Cell>
              <Table.Cell>{employer.telephone}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
