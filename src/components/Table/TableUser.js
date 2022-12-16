import React from 'react';
import { Table, Divider, Button } from 'antd';
import ModalHelper from '../Modal/ModalHelper';
import {ActionItem, ActionContainer, ButtonContainer} from './styled';

//Dane są zakodowane na twardo, tutaj należy dynamicznie połączyć to z backendem
//Zalecam również zastosowanie TypeScript lub DefaultProps do typowania - teraz na to nie ma czasu na wszystkie pliki

const columns = [
  {
    title: 'Imię',
    dataIndex: 'name',
  },
  {
    title: 'Nazwisko',
    dataIndex: 'surname',
  },
  {
    title: 'Czas wypożyczenia',
    dataIndex: 'rental',
  },
  {
    title: 'Nr tel',
    dataIndex: 'phone',
  },
  {
    title: 'PESEL',
    dataIndex: 'pesel',
  },
  {
    title: 'Id sprzętu',
    dataIndex: 'id',
  },
  {
    title: 'Koszt',
    dataIndex: 'value',
  },
];

const data = [
  {
    key: '1',
    name: 'Jan',
    surname: 'Kowalski',
    rental: '2 dni',
    phone:'723432123',
    pesel: '84022194853',
    id: '56332',
    value: '200zł',
  },
  {
    key: '1',
    name: 'Paweł',
    surname: 'Nowak',
    rental: '5 dni',
    phone:'726432273',
    pesel: '94025154353',
    id: '57333',
    value: '500zł',
  },
  {
    key: '1',
    name: 'Marta',
    surname: 'Bielik',
    rental: '4 dni',
    phone:'723435123',
    pesel: '64022394553',
    id: '53342',
    value: '400zł',
  },
];

const TableUser = ({title}) => {
  return (
  <>
    <ActionContainer>
      <Button>Szukaj</Button>
      <Button>Drukuj</Button>
    </ActionContainer>
    <Divider>{title}</Divider>
    <Table columns={columns} dataSource={data} size="middle" />
    <ButtonContainer>
      <ModalHelper/>
    </ButtonContainer>
  </>

  )
  };

export default TableUser;