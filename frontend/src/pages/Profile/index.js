import React from 'react';
import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';
import api from '~/services/api';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  async function handleSubmit(data) {
    try {
      await api.put(`users/${profile.id}/update`, data);
    } catch (err) {
      toast.error(
        'Ocorreu um erro e não foi possível atualizar as informações. Verifique os dados'
      );
    }
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full Name" />
        <Input name="email" placeholder="Your email" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Your current password"
        />
        <Input
          type="password"
          name="password"
          placeholder="Your new password"
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your new  password"
        />

        <button type="submit">Update</button>
      </Form>
    </Container>
  );
}
