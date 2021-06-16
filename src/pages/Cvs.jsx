import React from "react";
import { useState, useEffect } from "react";
import CvService from "../services/cvService";
import { useHistory } from "react-router";
import { Icon, Table, Button, Image, Header } from "semantic-ui-react";

export default function Cvs() {
  const [cvs, setCvs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let cvService = new CvService();
    cvService
      .getAllSortedByGraduate()
      .then((result) => setCvs(result.data.data));
  }, []);

  return (
    <div>
      <Table inverted style={{ marginBottom: "0" }}>
        <Table.Header>
          <Table.HeaderCell style={{ textAlign: "center" }}>
            Cvs
            <Icon name="id card" style={{ marginLeft: "0.3em" }} />
          </Table.HeaderCell>
        </Table.Header>
      </Table>

      <Table celled inverted style={{ marginTop: "0" }}>
        <Table.Header>
          <Table.HeaderCell>
            Candidate
            <Icon name="user" style={{ marginLeft: "0.3em" }} />
          </Table.HeaderCell>
          <Table.HeaderCell>
            Github
            <Icon name="github" style={{ marginLeft: "0.3em" }} />
          </Table.HeaderCell>
          <Table.HeaderCell>
            LinkedIn
            <Icon name="linkedin" style={{ marginLeft: "0.3em" }} />
          </Table.HeaderCell>
          <Table.HeaderCell>
            Details
            <Icon name="book" style={{ marginLeft: "0.3em" }} />
          </Table.HeaderCell>
        </Table.Header>

        <Table.Body>
          {cvs.map((cv) => (
            <Table.Row key={cv.id}>
              <Table.Cell style={{ textAlign: "center" }}>
                <Header>
                  <Image
                    src={cv.image.url}
                    size={"small"}
                    rounded
                    style={{ marginRight: "0.5em" }}
                  ></Image>
                  <Button
                    onClick={() =>
                      history.push("#")
                    }
                  >
                    {cv.candidate.name} {cv.candidate.surname}
                  </Button>
                </Header>
              </Table.Cell>
              <Table.Cell style={{ textAlign: "center" }}>
                <a href={cv.github} target={"_blank"} rel="noopener noreferrer">
                  <Button secondary>
                    <Icon name="github" /> Github
                  </Button>
                </a>
              </Table.Cell>
              <Table.Cell style={{ textAlign: "center" }}>
                <a
                  href={cv.linkedin}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <Button color="linkedin">
                    <Icon name="linkedin" /> LinkedIn
                  </Button>
                </a>
              </Table.Cell>
              <Table.Cell style={{ textAlign: "center" }}>
                {cv.coverLetter}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
