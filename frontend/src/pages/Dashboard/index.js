import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import RequestItem from '~/components/RequestItem';
import { Container, RequestList } from './styles';

export default function Dashboard() {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    async function loadRequests() {
      const response = await api.get('/requests');

      setRequests(response.data);
    }
    loadRequests();
  }, []);

  return (
    <Container>
      <RequestList>
        {requests.map(request => (
          <RequestItem key={request.id} data={request} />
        ))}
      </RequestList>
    </Container>
  );
}
