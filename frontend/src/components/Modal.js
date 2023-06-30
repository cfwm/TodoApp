import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
  List,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
      mode: this.props.mode,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { mode, toggle, onSave } = this.props;

    const modalTitle = () => {
      switch(mode) {
        case "create":
          return "Criar";
        case "edit":
          return `Editar: ${this.state.activeItem.title}`;
        default:
          return `Detalhes: ${this.state.activeItem.title}`;
        
      }
    }

    const saveButton = () => {
      return  <Button
          color="success"
          onClick={() => onSave(this.state.activeItem)}
        >
          Salvar
        </Button>
    }

    const formItem = () => {
      return <Form>
            <FormGroup>
              <Label for="todo-title">Título</Label>
              <Input
                type="text"
                id="todo-title"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Escreva o título"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-description">Descrição</Label>
              <Input
                type="text"
                id="todo-description"
                name="description"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Escreva a descrição"
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="completed"
                  checked={this.state.activeItem.completed}
                  onChange={this.handleChange}
                />
                  Completa
              </Label>
            </FormGroup>
          </Form>
    }

    const listItem = () => {
      return <List type="unstyled">
        <li>
          Título: <b>{ this.state.activeItem.title }</b>
        </li>
        <li>
          Descrição: <b>{ this.state.activeItem.description }</b>
        </li>
        <li>
          Completa: <b>{ this.state.activeItem.completed ? "Sim" : "Não" }</b>
        </li>
      </List>
    }
    
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>{ modalTitle() }</ModalHeader>

        <ModalBody>
          { mode === 'see' ? listItem() : formItem() }
        </ModalBody>

        <ModalFooter>
          { ["create", "edit"].some(item => item === mode) && saveButton() }
        </ModalFooter>
      </Modal>
    );
  }
}