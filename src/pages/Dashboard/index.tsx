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
            src="https://avatars0.githubusercontent.com/u/23322128?s=460&u=a043a598db52877f3edaf4972f8def44e7ae0016&v=4"
            alt="Felipe Santos"
          />
          <div>
            <strong>felipedmsantos95/log-vaccine</strong>
            <p>Cartão de vacina digital com blockchain!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/23322128?s=460&u=a043a598db52877f3edaf4972f8def44e7ae0016&v=4"
            alt="Felipe Santos"
          />
          <div>
            <strong>felipedmsantos95/log-vaccine</strong>
            <p>Cartão de vacina digital com blockchain!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/23322128?s=460&u=a043a598db52877f3edaf4972f8def44e7ae0016&v=4"
            alt="Felipe Santos"
          />
          <div>
            <strong>felipedmsantos95/log-vaccine</strong>
            <p>Cartão de vacina digital com blockchain!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
