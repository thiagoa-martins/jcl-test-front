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
  const [students, setStudents] = React.useState([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [course, setCourse] = React.useState("");

  React.useEffect(() => {
    getData();
  }, []);

  function getData() {
    api.get("/students").then((response) => {
      setStudents(response.data);
    });
  }

  function handleRegister() {
    const nameRegex = /^[a-zA-ZÀ-ú\ ]{4,20}$/;
    const nameIsValid = nameRegex.test(name);

    const emailRegex = /^(?=.*[\@])(?=.*[\.])[a-zA-Z0-9\@\.]{10,256}$/;
    const emailIsValid = emailRegex.test(email);

    return {
      nameIsValid,
      emailIsValid,
    };
  }

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
                className="name-register"
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => {
                  const input = e.target;
                  const span = input.nextElementSibling;
                  const value = e.target.value;

                  setName(value);

                  const { nameIsValid } = handleRegister();

                  if (!nameIsValid) {
                    span.textContent =
                      "O nome precisa ter somente letras e entre 4 e 20 caracteres";
                    span.setAttribute("class", "error");
                    return;
                  }

                  span.textContent = "";
                  span.setAttribute("class", "");
                }}
              />
              <span></span>
            </label>

            <label>
              Email:{" "}
              <input
                className="email-register"
                type="text"
                placeholder="johndoe@email.com"
                onChange={(e) => {
                  const input = e.target;
                  const span = input.nextElementSibling;
                  const value = e.target.value;

                  setEmail(value);

                  const { emailIsValid } = handleRegister();

                  if (!emailIsValid) {
                    span.textContent =
                      " O email precisa ter um domínio válido com '@' e '.' e entre 10 e 256 caracteres";
                    span.setAttribute("class", "error");
                    return;
                  }

                  span.textContent = "";
                  span.setAttribute("class", "");
                }}
              />
              <span className="feedback"></span>
            </label>

            <label>
              Curso:{" "}
              <select
                name="course"
                onChange={(e) => {
                  const input = e.target;
                  const span = input.nextElementSibling;
                  const value = e.target.value;

                  setCourse(value);

                  if (course === "") {
                    span.textContent = "Selecione uma opção";
                    span.setAttribute("class", "error");
                    return;
                  }

                  span.textContent = "";
                  span.removeAttribute("class", "error");
                }}
              >
                <option value="">-- SELECIONE --</option>
                <option value="1">Analista de Teste de Software</option>
                <option value="2">Análise e Desenvolvimento de Sistemas</option>
                <option value="3">DBA</option>
                <option value="4">Design Gráfico</option>
              </select>
              <span className="feedback"></span>
            </label>

            <Button
              title="Adicionar"
              onClick={() => {
                const div = document.querySelector(".register");
                const inputName = document.querySelector(".name-register");
                const inputEmail = document.querySelector(".email-register");

                console.log(inputName);
                console.log(inputEmail);

                const { nameIsValid } = handleRegister();
                const { emailIsValid } = handleRegister();

                // api.post(`students/${course}`, {
                //   name,
                //   email,
                // });

                setTimeout(() => {
                  getData();
                }, 1000);

                div.style.display = "none";
                inputName.value = "";
                inputEmail.value = "";
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
                      const div = document.querySelector(".register");
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
