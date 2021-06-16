import React from "react";
import { useState } from "react";
import { Icon, Table, Button } from "semantic-ui-react";
import { useHistory } from "react-router";
import { useEffect } from "react";
import JobPostingService from "../services/jobPostingService";

export default function JobAdvertisements() {
  const [advertisements, setadvertisements] = useState([]);
  let history = useHistory();

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getActiveJobPostings()
      .then((result) => setadvertisements(result.data.data));
  }, []);

  return (
    <div>
      <Table inverted style={{ marginBottom: "0" }}>
        <Table.Header>
          <Table.HeaderCell style={{ textAlign: "right" }}>
            Advertisements
            <Icon name="announcement" style={{ marginLeft: "0.3em" }} />
          </Table.HeaderCell>
          <Table.HeaderCell style={{ textAlign: "right" }}>
            <Button
              style={{ background: "#4EF4EA" }}
              onClick={() => {
                history.push("/newjobadvertisement");
              }}
            >
              Add Job Advertisement
              <Icon.Group style={{ marginLeft: "0.5em" }}>
                <Icon name="announcement" />
                <Icon corner name="add" />
              </Icon.Group>
            </Button>
          </Table.HeaderCell>
        </Table.Header>
      </Table>

      <Table celled inverted style={{ marginTop: "0" }}>
        <Table.Header>
          <Table.HeaderCell>
            Employer
            <Icon name="factory" style={{ marginLeft: "0.3em" }} />
          </Table.HeaderCell>
          <Table.HeaderCell>
            Position
            <Icon name="laptop" style={{ marginLeft: "0.3em" }} />
          </Table.HeaderCell>
          <Table.HeaderCell>
            Salary
            <Icon
              name="money bill alternate outline"
              style={{ marginLeft: "0.3em" }}
            />
          </Table.HeaderCell>
          <Table.HeaderCell>
            City
            <Icon name="building outline" style={{ marginLeft: "0.3em" }} />
          </Table.HeaderCell>
        </Table.Header>

        <Table.Body>
          {advertisements.map((advertisement) => (
            <Table.Row key={advertisement.id}>
              <Table.Cell>{advertisement.companyName}</Table.Cell>
              <Table.Cell>{advertisement.jobPositionName}</Table.Cell>
              <Table.Cell>
                {advertisement.minSalary} - {advertisement.maxSalary}
              </Table.Cell>
              <Table.Cell>{advertisement.city}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
