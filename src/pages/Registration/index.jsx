import React from "react";

import { AiOutlineSave } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoMdRemoveCircle } from "react-icons/io";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { TableHead } from "../../components/TableHead";
import { TableData } from "../../components/TableData";

import { Container, Content, Table, Icon } from "./styles";

import { api } from "../../services/api";

export function Registration() {
  const div = document.querySelector(".register");

  const [students, setStudents] = React.useState([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [course, setCourse] = React.useState("");

  React.useEffect(() => {
    api.get("/students").then((response) => {
      setStudents(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Alunos Cadastrados</h1>

          <div className="register">
            <label>
              Nome:{" "}
              <input
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => {
                  const value = e.target.value;
                  setName(value);
                  console.log(name);
                }}
              />
            </label>
            <label>
              Email:{" "}
              <input
                type="text"
                placeholder="johndoe@email.com"
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);
                  console.log(email);
                }}
              />
            </label>
            <label>
              Curso:{" "}
              <select
                name="course"
                onChange={(e) => {
                  const value = e.target.value;
                  setCourse(value);
                  console.log(course);
                }}
              >
                <option value="">-- SELECIONE --</option>
                <option value="1">Analista de Teste de Software</option>
                <option value="2">Análise e Desenvolvimento de Sistemas</option>
                <option value="3">DBA</option>
                <option value="4">Design Gráfico</option>
              </select>
            </label>
            <Button
              title="Adicionar"
              onClick={() => {
                console.log("cliquei");
              }}
            />
          </div>

          <Table>
            <thead>
              <TableHead>
                <th>
                  <Button
                    title="Novo Aluno"
                    onClick={(e) => {
                      div.style.display = "flex";
                      console.log("cliquei");
                    }}
                  >
                    <Icon>
                      <AiOutlineSave />
                    </Icon>
                  </Button>
                </th>
              </TableHead>
            </thead>
            <tbody>
              {students.map((student, index) => {
                return (
                  <TableData
                    key={index}
                    name={student.name}
                    email={student.email}
                    course={student.title}
                  >
                    <td>
                      <Button title="Alterar">
                        <Icon>
                          <HiOutlinePencilAlt />
                        </Icon>
                      </Button>

                      <Button title="Deletar" red>
                        <Icon>
                          <IoMdRemoveCircle />
                        </Icon>
                      </Button>
                    </td>
                  </TableData>
                );
              })}
            </tbody>
          </Table>
        </Content>
      </Container>
    </>
  );
}
