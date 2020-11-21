import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/46090502?s=460&u=666e698ac4e1ae47b95f9acc5eefec950dedba20&v=4"
            alt="José Eustaquio"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native Forms! </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/46090502?s=460&u=666e698ac4e1ae47b95f9acc5eefec950dedba20&v=4"
            alt="José Eustaquio"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native Forms! </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/46090502?s=460&u=666e698ac4e1ae47b95f9acc5eefec950dedba20&v=4"
            alt="José Eustaquio"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native Forms! </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
