import React, { useEffect, useState } from "react";
import { Container, Card, Row, ListGroup } from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepoList } from "../redux/actions";

function RepoList(props) {
  const dispatch = useDispatch();

  //states
  const [username, setUsername] = useState("No user selected");

  //selectors
  const { repoList } = useSelector((state) => state);

  useEffect(() => {}, []);

  const fetchRepo = (username) => {
    setUsername(username);
    dispatch(fetchRepoList(username));
  };
  return (
    <Container style={{ padding: 5, width: "90%" }} fluid>
      <Card.Title className="title">Repo List</Card.Title>
      <Card.Text className="user-list">
        Select User Name to fetch repositories
      </Card.Text>

      <ListGroup as="ul" style={{ marginBottom: "20px" }}>
        <ListGroup.Item
          as="li"
          onClick={() => fetchRepo("defunkt")}
          className="cursor-pointer"
        >
          defunkt
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          onClick={() => {
            fetchRepo("octocat");
          }}
          className="cursor-pointer"
        >
          octocat
        </ListGroup.Item>
      </ListGroup>

      <Card.Text className="user-selected">
        Selected User Name: <span className="user-name">{username}</span>
      </Card.Text>

      <Card.Text className="user-selected">
        Following is list of repositories of selected user:
      </Card.Text>
      <Row style={{ marginBottom: "10px" }}></Row>
      <BootstrapTable data={repoList} hover search={true} pagination>
        <TableHeaderColumn dataField="id" isKey={true}>
          Id
        </TableHeaderColumn>

        <TableHeaderColumn dataField="name">Repo Name</TableHeaderColumn>
      </BootstrapTable>
    </Container>
  );
}

export default RepoList;
