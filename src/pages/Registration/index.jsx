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
  const [currentStudent, setCurrentStudent] = React.useState({});

  React.useEffect(() => {
    getData();
  }, []);

  function getData() {
    api.get("/students").then((response) => {
      setStudents(response.data);
    });
  }

  function validateInputs() {
    const nameRegex = /^[a-zA-ZÀ-ú\ ]{4,20}$/;
    const nameIsValid = nameRegex.test(name);

    const emailRegex = /^(?=.*[\@])(?=.*[\.])[a-zA-Z0-9\@\.]{10,256}$/;
    const emailIsValid = emailRegex.test(email);

    return {
      nameIsValid,
      emailIsValid,
    };
  }

  function nameFeedback(span) {
    const { nameIsValid } = validateInputs();

    if (!nameIsValid) {
      span.textContent =
        "O nome precisa ter somente letras e entre 4 e 20 caracteres";
      span.classList.add("error");
      return;
    }

    span.textContent = "";
    span.classList.remove("error");
  }

  function emailFeedback(span) {
    const { emailIsValid } = validateInputs();

    if (!emailIsValid) {
      span.textContent =
        " O email precisa ter um domínio válido com '@' e '.' e entre 10 e 256 caracteres";
      span.classList.add("error");
      return;
    }

    span.textContent = "";
    span.classList.remove("error");
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
                  nameFeedback(span);
                }}
              />
              <span className="feedback-name-register"></span>
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
                  emailFeedback(span);
                }}
              />
              <span className="feedback-email-register"></span>
            </label>

            <label>
              Curso:{" "}
              <select
                name="course"
                onChange={(e) => {
                  const value = e.target.value;
                  setCourse(value);
                }}
              >
                <option value="">-- SELECIONE --</option>
                <option value="1">Analista de Teste de Software</option>
                <option value="2">Análise e Desenvolvimento de Sistemas</option>
                <option value="3">DBA</option>
                <option value="4">Design Gráfico</option>
              </select>
              <span></span>
            </label>

            <Button
              title="Adicionar"
              onClick={() => {
                const div = document.querySelector(".register");
                const inputName = document.querySelector(".name-register");
                const inputEmail = document.querySelector(".email-register");
                const select = document.querySelector("select", "#course");

                const spanName = document.querySelector(
                  ".feedback-name-register"
                );
                const spanEmail = document.querySelector(
                  ".feedback-email-register"
                );

                nameFeedback(spanName);
                emailFeedback(spanEmail);

                const { nameIsValid } = validateInputs();
                const { emailIsValid } = validateInputs();

                if (nameIsValid && emailIsValid && course !== "") {
                  api
                    .post(`students/${course}`, {
                      name,
                      email,
                    })
                    .then(() => {
                      alert("Aluno cadastrado com sucesso!");
                      getData();
                    })
                    .catch((error) => {
                      if (error.response) {
                        alert(error.response.data.message);
                      } else {
                        alert("Não foi possível cadastrar");
                      }
                    });

                  setName("");
                  setEmail("");
                  setCourse("");

                  div.style.display = "none";
                  inputName.value = "";
                  inputEmail.value = "";
                  select.value = "";
                }
              }}
            />
          </div>

          <div className="update">
            <label>
              Nome:{" "}
              <input
                className="name-update"
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => {
                  const input = e.target;
                  const span = input.nextElementSibling;
                  const value = e.target.value;

                  setName(value);
                  nameFeedback(span);
                }}
              />
              <span className="feedback-name-update"></span>
            </label>

            <label>
              Email:{" "}
              <input
                className="email-update"
                type="text"
                placeholder="johndoe@email.com"
                onChange={(e) => {
                  const input = e.target;
                  const span = input.nextElementSibling;
                  const value = e.target.value;

                  setEmail(value);
                  emailFeedback(span);
                }}
              />
              <span className="feedback-email-update"></span>
            </label>

            <label>
              Curso:{" "}
              <select
                className="course-update"
                name="course"
                onChange={(e) => {
                  const value = e.target.value;
                  setCourse(value);
                }}
              >
                <option value="">-- SELECIONE --</option>
                <option value="1">Analista de Teste de Software</option>
                <option value="2">Análise e Desenvolvimento de Sistemas</option>
                <option value="3">DBA</option>
                <option value="4">Design Gráfico</option>
              </select>
              <span></span>
            </label>

            <Button
              title="Atualizar dados"
              onClick={() => {
                const divUpdate = document.querySelector(".update");
                const inputName = document.querySelector(".name-register");
                const inputEmail = document.querySelector(".email-register");

                const spanName = document.querySelector(
                  ".feedback-name-update"
                );
                const spanEmail = document.querySelector(
                  ".feedback-email-update"
                );

                nameFeedback(spanName);
                emailFeedback(spanEmail);

                const { nameIsValid } = validateInputs();
                const { emailIsValid } = validateInputs();

                if (nameIsValid && emailIsValid && course !== "") {
                  api
                    .put(`students/${currentStudent.id}`, {
                      name,
                      email,
                      course_id: course,
                    })
                    .then(() => {
                      alert("Dados atualizados com sucesso!");
                      getData();
                    })
                    .catch((error) => {
                      if (error.response) {
                        alert(error.response.data.message);
                      } else {
                        alert("Não foi possível atualizar");
                      }
                    });

                  setName("");
                  setEmail("");
                  setCourse("");

                  divUpdate.style.display = "none";
                  inputName.value = "";
                  inputEmail.value = "";
                }
              }}
            />
          </div>

          <Table>
            <thead>
              <TableHead>
                <th>
                  <Button
                    title="Novo Aluno"
                    onClick={() => {
                      const divRegister = document.querySelector(".register");
                      const divUpdate = document.querySelector(".update");
                      divRegister.style.display = "flex";
                      divUpdate.style.display = "none";
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
                      <Button
                        title="Alterar"
                        onClick={() => {
                          const divUpdate = document.querySelector(".update");
                          const divRegister =
                            document.querySelector(".register");
                          const inputName =
                            document.querySelector(".name-update");
                          const inputEmail =
                            document.querySelector(".email-update");
                          const select =
                            document.querySelector(".course-update");

                          divRegister.style.display = "none";
                          divUpdate.style.display = "flex";

                          inputName.value = student.name;
                          inputEmail.value = student.email;
                          select.value = student.course_id;

                          setName(student.name);
                          setEmail(student.email);
                          setCourse(student.course_id);

                          setCurrentStudent(student);
                        }}
                      >
                        <Icon>
                          <HiOutlinePencilAlt />
                        </Icon>
                      </Button>

                      <Button
                        title="Deletar"
                        red
                        onClick={() => {
                          const divUpdate = document.querySelector(".update");
                          const divRegister =
                            document.querySelector(".register");

                          divRegister.style.display = "none";
                          divUpdate.style.display = "none";

                          api
                            .delete(`/students/${student.id}`)
                            .then(() => {
                              alert("Aluno deletado com sucesso.");
                              getData();
                            })
                            .catch(() => {
                              alert("Erro ao deletar aluno.");
                            });
                        }}
                      >
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
