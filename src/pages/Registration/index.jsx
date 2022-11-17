import { AiOutlineSave } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoMdRemoveCircle } from "react-icons/io";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { TableHead } from "../../components/TableHead";
import { TableData } from "../../components/TableData";

import { Container, Icon, Table } from "./styles";

export function Registration() {
  return (
    <>
      <Header />
      <Container>
        <Table>
          <thead>
            <h1>Alunos Cadastrados</h1>
            <TableHead>
              <th>
                <Button title="Novo Aluno">
                  <Icon>
                    <AiOutlineSave />
                  </Icon>
                </Button>
              </th>
            </TableHead>
          </thead>
          <tbody>
            <TableData
              name="Lucas"
              email="lucas@gmail.com"
              course="Análise e Desenvolvimento de Sistemas"
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

            <TableData
              name="Renata"
              email="renata@gmail.com"
              course="Design Gráfico"
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

            <TableData
              name="Dantas"
              email="dantas@gmail.com"
              course="Design Gráfico"
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
          </tbody>
        </Table>
      </Container>
    </>
  );
}
