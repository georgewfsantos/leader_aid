import React from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '~/services/api';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('Insira um email válido'),
  phone: Yup.string().required('O telefone é obrigatório'),
});

export default function Requests() {
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit(data) {
    try {
      await api.post('/requests', data);
      toast.success('Solicitação enviada com sucesso');
    } catch (err) {
      if (err.response) {
        toast.error(`${err.response.data.error}`);
      }
    }
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h1>Solicitar Conversa</h1>
        <Input name="name" type="text" placeholder="Seu nome" />
        <Input name="email" type="email" placeholder="Seu email (opcional)" />
        <Input name="phone" type="text" placeholder="Seu telefone" />

        <button type="submit">{loading ? 'Carregando...' : 'Enviar'}</button>
      </Form>
      <Link to="/login">Login para líderes</Link>
    </>
  );
}
