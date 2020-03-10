import React, { useState, useEffect } from 'react';
import { parseISO } from 'date-fns';
import history from '~/services/history';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { Container } from './styles';

export default function ShowDetails({ match }) {
  const [request, setRequest] = useState({});

  useEffect(() => {
    async function loadInfo() {
      const response = await api.get(`/requests/${match.params.request_id}`);

      setRequest(response.data);
    }
    loadInfo();
  }, []);

  async function handleAnswer() {
    await api.put(`/requests/${match.params.request_id}/answer`);

    toast.success('Marcado como respondido');

    history.push('/dashboard');
  }

  async function handleDelete() {
    await api.delete(`/requests/${match.params.request_id}/delete`);

    toast.success('Excluído com sucesso');
    history.push('/dashboard');
  }
  return (
    <Container>
      <div className="info">
        <strong>{request.name}</strong>
        <strong>{request.email !== '' ? request.email : 'N/A'}</strong>
        <strong>{request.phone}</strong>
        <strong>
          {parseISO(request.createdAt).toLocaleDateString('pt-BR')}
        </strong>

        <div className="button">
          <button type="button" onClick={handleDelete}>
            Excluir
          </button>
          <button type="button" onClick={handleAnswer}>
            Atendida
          </button>
        </div>
      </div>
    </Container>
  );
}
